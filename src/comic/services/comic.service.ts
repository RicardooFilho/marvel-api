import {comicType} from "../types/comic.type";
import comicSchema from "../schemas/comic.schema";
import axios from "axios";

class ComicService {

    async createMarvelAPIComic() {
        const API_URL = 'https://gateway.marvel.com/v1/public/series/30150/comics';
        const TS = '?ts=1';
        const API_KEY = '&apikey=65a6cfbc8f1c2595c99ad52e2269c95d';
        const HASH_CODE = '&hash=bb3275c4a6565d0b75e16472b78a0ea7';
        const LIMIT = '&limit=100';

        const resourceURIs = await axios.get(`${API_URL}${TS}${API_KEY}${HASH_CODE}${LIMIT}`);
        const responseResourceURIs  = resourceURIs.data.data.results.map((comic: any) => comic.resourceURI);

        for (const resourceURI of responseResourceURIs) {
            const comicURI = await axios.get(`${resourceURI}${TS}${API_KEY}${HASH_CODE}`);
            const responseComicURI = comicURI.data.data.results;
            const newCreator = {
                digitalId: responseComicURI[0].digitalId,
                title: responseComicURI[0].title,
                issueNumber: responseComicURI[0].issueNumber,
                variantDescription: responseComicURI[0].variantDescription,
                description: responseComicURI[0].description,
                isbn: responseComicURI[0].isbn,
                diamondCode: responseComicURI[0].diamondCode,
                format: responseComicURI[0].format,
                pageCount: responseComicURI[0].pageCount
            } as comicType;

            await comicSchema.create(newCreator);
        }
    }


    async create(comic: comicType) {
        const createdComic = await comicSchema.create(comic);
        return createdComic;
    }

    async findAll() {
        const foundComics = await comicSchema.find();
        return foundComics;
    }

    async findById(comicId: string) {
        const foundComics = await comicSchema.findById(comicId);
        return foundComics;
    }

    async update(comicId: string, comic: comicType) {
        const updatedComic = await comicSchema.findByIdAndUpdate(comicId, {
            digitalId: comic.digitalId,
            title: comic.title,
            issueNumber: comic.issueNumber,
            variantDescription: comic.variantDescription,
            description: comic.description,
            isbn: comic.isbn,
            diamondCode: comic.diamondCode,
            format: comic.format,
            pageCount: comic.pageCount
        }, { new: true });

        return updatedComic;
    }

    async delete(comicId: string) {
        try {
            await comicSchema.findByIdAndDelete(comicId);
            return `Quadrinho deletado`;
        } catch (error) {
            throw new Error(`Erro ao remover quadrinho: ${error}`);
        }
    }

    async count() {
        return comicSchema.countDocuments();
    }

    async comicsWithMoreOrEqualsThanFiftyPages() {
        return comicSchema.find({ pageCount: { $gt: 50 } });
    }
}

export default new ComicService();