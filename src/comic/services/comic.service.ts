import {comicType} from "../types/comic.type";
import comicSchema from "../schemas/comic.schema";

class ComicService {
    async create(comic: comicType) {
        const createdComic = await comicSchema.create(comic);
        return createdComic;
    }

    async findAll() {
        const foundComics= await comicSchema.find();
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
}

export default new ComicService();