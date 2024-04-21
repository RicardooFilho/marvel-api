import { Router } from 'express'
import creatorController from "./creator/controllers/creator.controller";
import comicController from "./comic/controllers/comic.controller";
import characterController from "./character/controllers/character.controller";

const routes = Router()

routes.post('/api/creators/marvel-api', creatorController.createMarvelAPICreator);
routes.post('/api/creators', creatorController.create);
routes.get('/api/creators', creatorController.findAll);
routes.get('/api/creators/:id', creatorController.findById);
routes.put('/api/creators/:id', creatorController.update);
routes.delete('/api/creators/:id', creatorController.delete);

routes.post('/api/comics/marvel-api', comicController.createMarvelAPIComic);
routes.post('/api/comics', comicController.create);
routes.get('/api/comics', comicController.findAll);
routes.get('/api/comics/:id', comicController.findById);
routes.put('/api/comics/:id', comicController.update);
routes.delete('/api/comics/:id', comicController.delete);

routes.post('/api/characters/marvel-api', characterController.createMarvelAPICharacter);
routes.post('/api/characters', characterController.create);
routes.get('/api/characters', characterController.findAll);
routes.get('/api/characters/:id', characterController.findById);
routes.put('/api/characters/:id', characterController.update);
routes.delete('/api/characters/:id', characterController.delete);

export { routes };