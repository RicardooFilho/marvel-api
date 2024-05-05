import { Router } from 'express'
import creatorController from "./creator/controllers/creator.controller";
import comicController from "./comic/controllers/comic.controller";
import characterController from "./character/controllers/character.controller";
import creatorService from "./creator/services/creator.service";

const routes = Router()

routes.post('/api/creators/marvel-api', creatorController.createMarvelAPICreator);
routes.post('/api/creators', creatorController.create);
routes.get('/api/creators', creatorController.findAll);
routes.get('/api/creators/count', creatorController.count);
routes.get('/api/creators/:id', creatorController.findById);
routes.put('/api/creators/:id', creatorController.update);
routes.delete('/api/creators/:id', creatorController.delete);

routes.post('/api/comics/marvel-api', comicController.createMarvelAPIComic);
routes.post('/api/comics', comicController.create);
routes.get('/api/comics', comicController.findAll);
routes.get('/api/comics/count', comicController.count);
routes.get('/api/comics/pages-gte-50', comicController.findComicsWithPagesGTEFifty)
routes.get('/api/comics/:id', comicController.findById);
routes.put('/api/comics/:id', comicController.update);
routes.delete('/api/comics/:id', comicController.delete);

routes.post('/api/characters/marvel-api', characterController.createMarvelAPICharacter);
routes.post('/api/characters', characterController.create);
routes.get('/api/characters', characterController.findAll);
routes.get('/api/characters/count', characterController.count);
routes.get('/api/characters/description-gt-50', characterController.findcharactersWithDescriptionGTFifty);
routes.get('/api/characters/:id', characterController.findById);
routes.put('/api/characters/:id', characterController.update);
routes.delete('/api/characters/:id', characterController.delete);

export { routes };