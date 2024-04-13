import {characterType} from "../types/character.type";
import characterSchema from "../schemas/character.schema";

class CharacterService {
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
}

export default new CharacterService();