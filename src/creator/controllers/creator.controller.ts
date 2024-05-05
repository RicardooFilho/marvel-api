import {Request, Response} from 'express';
import creatorService from "../services/creator.service";
import {StatusCode} from "../../status/status.enum";

class CreatorController {

    async createMarvelAPICreator(req: Request, res: Response) {
        try {
            await creatorService.createMarvelAPICreator();
            return res.status(StatusCode.SUCCESS).send();
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newCreator = req.body;
            const createdCreator = await creatorService.create(newCreator);
            return res.status(StatusCode.CREATED).json(createdCreator);
        } catch (error) {
            console.error(`Erro ao criar um criador: ${error}`);
            res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const foundCreators = await creatorService.findAll();
            return res.status(StatusCode.SUCCESS).json(foundCreators);
        } catch (error) {
            console.error(`Erro ao buscar os criadores: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const creatorId = req.params.id;
            const foundCreator = await creatorService.findById(creatorId);
            return res.status(StatusCode.SUCCESS).json(foundCreator);
        } catch (error) {
            console.error(`Erro ao buscar o criador: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async update(req: Request, res: Response) {
        try {
            const creatorId = req.params.id;
            const newCreator = req.body;
            const updatedCreator = await creatorService.update(creatorId, newCreator);
            return res.status(StatusCode.SUCCESS).json(updatedCreator);
        } catch (error) {
            console.error(`Erro ao atualizar informações do criador: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const creatorId = req.body.id;
            await creatorService.delete(creatorId);
            return res.status(StatusCode.NO_CONTENT).send();
        } catch (error) {
            console.error(`Erro ao remover criador: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async count(req: Request, res: Response) {
        try {
            const creators = await creatorService.count();
            return res.status(StatusCode.SUCCESS).json(`Número de Criadores que participaram da criação da Saga King in Black: ${creators}`);
        } catch (error) {
            console.error(`Erro ao contar os criadores: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }
}

export default new CreatorController();