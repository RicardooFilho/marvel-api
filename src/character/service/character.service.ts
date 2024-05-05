import {characterType} from "../types/character.type";
import characterSchema from "../schemas/character.schema";
import axios from "axios";

class CharacterService {

    async createMarvelAPICharacter() {
        const API_URL = 'https://gateway.marvel.com/v1/public/series/30150/characters';
        const TS = '?ts=1';
        const API_KEY = '&apikey=65a6cfbc8f1c2595c99ad52e2269c95d';
        const HASH_CODE = '&hash=bb3275c4a6565d0b75e16472b78a0ea7';

        const resourceURIs = await axios.get(`${API_URL}${TS}${API_KEY}${HASH_CODE}`);
        const responseResourceURIs  = resourceURIs.data.data.results.map((character: any) => character.resourceURI);

        for (const resourceURI of responseResourceURIs) {
            const characterURI = await axios.get(`${resourceURI}${TS}${API_KEY}${HASH_CODE}`);
            const responseCharacterURI = characterURI.data.data.results;
            const newCharacter = {
                name: responseCharacterURI[0].name,
                description: responseCharacterURI[0].description
            } as characterType;

            await characterSchema.create(newCharacter);
        }
    }

    async create(character: characterType) {
        const createdCharacter = await characterSchema.create(character);
        return createdCharacter;
    }

    async findAll() {
        const foundCharacters = await characterSchema.find();
        return foundCharacters;
    }

    async findById(characterId: string) {
        const foundCharacter = await characterSchema.findById(characterId);
        return foundCharacter;
    }

    async update(characterId: string, character: characterType) {
        const updatedCharacter = await characterSchema.findByIdAndUpdate(characterId, {
            name: character.name,
            description: character.description
        }, { new: true });

        return updatedCharacter;
    }

    async delete(characterId: string) {
        try {
            await characterSchema.findByIdAndDelete(characterId);
            return `Personagem removido`;
        } catch (error) {
            throw new Error(`Erro ao remover personagem: ${error}`);
        }
    }

    async count() {
        return characterSchema.countDocuments();
    }

    async charactersWithDescriptionGTFifty() {
        return characterSchema.find({ $expr: { $gt: [{ $strLenCP: "$description" }, 50] }});
    }
}

export default new CharacterService();