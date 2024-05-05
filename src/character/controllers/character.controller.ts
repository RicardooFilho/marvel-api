import {Request, Response} from 'express';
import {StatusCode} from "../../status/status.enum";
import characterService from "../service/character.service";
import comicService from "../../comic/services/comic.service";

class CharacterController {

    async createMarvelAPICharacter(req: Request, res: Response) {
        try {
            await characterService.createMarvelAPICharacter();
            return res.status(StatusCode.SUCCESS).send();
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newCharacter = req.body;
            const createdCharacter = await characterService.create(newCharacter);
            return res.status(StatusCode.CREATED).json(newCharacter);
        } catch (error) {
            console.error(`Erro ao criar um personagem: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const foundCharacters = await characterService.findAll();
            return res.status(StatusCode.SUCCESS).json(foundCharacters);
        } catch (error) {
            console.error(`Erro ao buscar os personagens: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const characterId = req.params.id;
            const foundCharacter = await characterService.findById(characterId);
            return res.status(StatusCode.SUCCESS).json(foundCharacter)
        } catch (error) {
            console.error(`Erro ao encontrar o personagem: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async update(req: Request, res: Response) {
        try {
            const characterId = req.params.id;
            const newCharacter = req.body;
            const updatedCharacter = await characterService.update(characterId, newCharacter);
            return res.status(StatusCode.SUCCESS).json(updatedCharacter);
        } catch (error) {
            console.error(`Erro ao atualizar o personagem: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const characterId = req.params.id;
            await characterService.delete(characterId);
            return res.status(StatusCode.NO_CONTENT).send();
        } catch (error) {
            console.error(`Erro ao remover personagem: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async count(req: Request, res: Response) {
        try {
            const characters = await characterService.count();
            return res.status(StatusCode.SUCCESS).json(`Número de Personagens que participaram da Saga King in Black: ${characters}`);
        } catch (error) {
            console.error(`Erro ao contar os personagens: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findcharactersWithDescriptionGTFifty(req: Request, res: Response) {
        try {
            const characters = await characterService.charactersWithDescriptionGTFifty();
            return res.status(StatusCode.SUCCESS).json(characters);
        } catch (error) {
            console.error(`Erro ao buscar os personagens com descrição maior que 50: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }
}

export default new CharacterController();