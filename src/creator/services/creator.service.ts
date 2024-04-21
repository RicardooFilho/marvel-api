import creatorSchema from "../schemas/creator.schema";
import {creatorType} from "../types/creator.type";
import axios from "axios";

class CreatorService {

    async createMarvelAPICreator() {
        const API_URL = 'https://gateway.marvel.com/v1/public/series/30150/creators';
        const TS = '?ts=1';
        const API_KEY = '&apikey=65a6cfbc8f1c2595c99ad52e2269c95d';
        const HASH_CODE = '&hash=bb3275c4a6565d0b75e16472b78a0ea7';
        const LIMIT = '&limit=100';

        const resourceURIs = await axios.get(`${API_URL}${TS}${API_KEY}${HASH_CODE}${LIMIT}`);
        const responseResourceURIs  = resourceURIs.data.data.results.map((creator: any) => creator.resourceURI);

        for (const resourceURI of responseResourceURIs) {
            const creatorURI = await axios.get(`${resourceURI}${TS}${API_KEY}${HASH_CODE}`);
            const responseCreatorURI = creatorURI.data.data.results;
            const newCreator = {
                firstName: responseCreatorURI[0].firstName,
                middleName: responseCreatorURI[0].middleName,
                lastName: responseCreatorURI[0].lastName,
                suffix: responseCreatorURI[0].suffix,
                fullName: responseCreatorURI[0].fullName
            } as creatorType;

            await creatorSchema.create(newCreator);
        }
    }


    async create(creator: creatorType) {
        const createdCreator = await creatorSchema.create(creator);
        return createdCreator;
    }

    async findAll() {
        const foundCreators = await creatorSchema.find();
        return foundCreators;
    }

    async findById(creatorId: string) {
        const foundCreators = await creatorSchema.findById(creatorId);
        return foundCreators;
    }

    async update(creatorId: string, creator: creatorType) {
        const updatedCreator = await creatorSchema.findByIdAndUpdate(creatorId, {
            firstName: creator.firstName,
            middleName: creator.middleName,
            lastName: creator.lastName,
            suffix: creator.suffix,
            fullName: creator.fullName
        }, { new: true });

        return updatedCreator;
    }

    async delete(creatorId: string) {
        try {
            await creatorSchema.findByIdAndDelete(creatorId);
            return `Criador removido`;
        } catch (error) {
            throw new Error(`Erro ao remover criador: ${error}`);
        }
    }
}

export default new CreatorService();