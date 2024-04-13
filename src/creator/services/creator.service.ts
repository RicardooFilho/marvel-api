import creatorSchema from "../schemas/creator.schema";
import {CreatorType} from "../types/creator.type";

class CreatorService {
    async create(creator: CreatorType) {
        const createdCreator = await creatorSchema.create();
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

    async update(creatorId: string, creator: CreatorType) {
        const updatedCreator = await creatorSchema.findByIdAndUpdate(creatorId, {
            firstName: creator.firstName,
            middleName: creator.middleName,
            lastName: creator.lastName,
            suffix: creator.suffix,
            fullName: creator.fullName,
            role: creator.role
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