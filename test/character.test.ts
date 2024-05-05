const express = require('express');
const app = express();
const request = require('supertest');
import characterSchema from "../src/character/schemas/character.schema";
import {createCharacterMock} from "./fixtures";
import characterService from "../src/character/service/character.service";

afterEach(async () => {
    await characterSchema.deleteMany();
});

describe('Testando endpoints de characters', () => {
    it('Deve inserir um character no banco', async() => {
        const characterMock = createCharacterMock();

        const response = await request(app).post('/api/characters').send(characterMock);
        const characterFound = await characterService.findAll();

        expect(response.status).toEqual(201);
        expect(response.body.id).toBeDefined();
        expect(characterMock.name).toBe(characterFound[0].name);
        expect(characterMock.description).toBe(characterFound[0].description);
    });

    it('Deve buscar todos os characters no banco', async() => {
        const characterMock = createCharacterMock();

        const response = await request(app).post('/api/characters').send(characterMock);
        const characterFound = await characterService.findAll();

        expect(response.status).toEqual(200);
        expect(response.body.id).toBeDefined();
        expect(characterMock.name).toBe(characterFound[0].name);
        expect(characterMock.description).toBe(characterFound[0].description);
    });

    it('Deve atualizar um character do banco', async() => {
        const characterMock = createCharacterMock();

        await request(app).post('/api/characters').send(characterMock);

        characterMock.name = "Another name";

        const responsePut = await request(app).put('api/characters/6636cc889a09d997d78aa1b3').send(characterMock)
        const characterFound = await characterService.findAll();

        expect(responsePut.status).toBe(200);
        expect(characterMock.name).toBe(characterFound[0].name);
    });

    it('Deve remover um character do banco', async() => {
        const characterMock = createCharacterMock();

        await request(app).post('/api/characters').send(characterMock);

        const responsePut = await request(app).delete('api/characters/6636cc889a09d997d78aa1b3');

        expect(responsePut.status).toBe(204);
    });
});