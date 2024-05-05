import {Request, Response} from 'express';
import comicService from "../services/comic.service";
import {StatusCode} from "../../status/status.enum";
import creatorService from "../../creator/services/creator.service";

class ComicController {

    async createMarvelAPIComic(req: Request, res: Response) {
        try {
            await comicService.createMarvelAPIComic();
            return res.status(StatusCode.SUCCESS).send();
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newComic = req.body;
            const createdComic = await comicService.create(newComic);
            return res.status(StatusCode.CREATED).json(createdComic);
        } catch (error) {
            console.error(`Erro ao criar um quadrinho: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const foundComics = await comicService.findAll();
            return res.status(StatusCode.SUCCESS).json(foundComics);
        } catch (error) {
            console.error(`Erro ao buscar os quadrinhos: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const comicId = req.params.id;
            const foundComid = await comicService.findById(comicId);
            return res.status(StatusCode.SUCCESS).json(comicId);
        } catch (error) {
            console.error(`Erro ao buscar o quadrinho: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async update(req: Request, res: Response) {
        try {
            const comicId = req.params.id;
            const newComic = req.body;
            const updatedComic = await comicService.update(comicId, newComic);
            return res.status(StatusCode.SUCCESS).json(updatedComic);
        } catch (error) {
            console.error(`Erro ao atualizar o quadrinho: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const comicId = req.params.id;
            await comicService.delete(comicId);
            return res.status(StatusCode.NO_CONTENT).send();
        } catch (error) {
            console.error(`Erro ao remover quadrinho: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send()
        }
    }

    async count(req: Request, res: Response) {
        try {
            const comics = await comicService.count();
            return res.status(StatusCode.SUCCESS).json(`Número de Quadrinhos da Saga King in Black: ${comics}`);
        } catch (error) {
            console.error(`Erro ao contar os quadrinhos: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }

    async findComicsWithPagesGTEFifty(req: Request, res: Response) {
        try {
            const comics = await comicService.comicsWithMoreOrEqualsThanFiftyPages();
            return res.status(StatusCode.SUCCESS).json(comics);
        } catch (error) {
            console.error(`Erro ao buscar os quadrinhos com 50 páginas ou mais: ${error}`);
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).send();
        }
    }
}

export default new ComicController();