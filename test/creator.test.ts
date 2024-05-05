import creatorSchema from "../src/creator/schemas/creator.schema";
import {createCreatorMock} from "./fixtures";
import creatorService from "../src/creator/services/creator.service";
const express = require('express');
const app = express();
const request = require('supertest');

afterEach(async() => {
   await creatorSchema.deleteMany();
});

describe('Testando os endpoints de creators', () => {
    it('Deve inserir um creator no banco', async() => {
        const creatorMock = createCreatorMock();

        const response = await request(app).post('/api/creators').send(creatorMock);
        const creatorFound = await creatorService.findAll();

        expect(response.status).toEqual(201);
        expect(response.body.id).toBeDefined();
        expect(creatorMock.firstName).toBe(creatorFound[0].firstName);
        expect(creatorMock.middleName).toBe(creatorFound[0].middleName);
        expect(creatorMock.lastName).toBe(creatorFound[0].lastName);
        expect(creatorMock.suffix).toBe(creatorFound[0].suffix);
        expect(creatorMock.fullName).toBe(creatorFound[0].fullName);
    });

    it('Deve buscar todos os creators do banco', async() => {
        const creatorMock = createCreatorMock();

        await request(app).post('/api/creators').send(creatorMock);

        const response = await request(app).get('/api/creators');

        expect(response.status).toEqual(200);
        expect(response.body.id).toBeDefined();
        expect(creatorMock.firstName).toBe(response[0].firstName);
        expect(creatorMock.middleName).toBe(response[0].middleName);
        expect(creatorMock.lastName).toBe(response[0].lastName);
        expect(creatorMock.suffix).toBe(response[0].suffix);
        expect(creatorMock.fullName).toBe(response[0].fullName);
    });

    it('Deve atualizar um creator do banco', async() => {
        const creatorMock = createCreatorMock();

        await request(app).post('/api/creators').send(creatorMock);

        creatorMock.suffix = "Another Suffix";

        const response = await request(app).put('/api/creators/6636cc9b9a09d997d78aa205').send(creatorMock);

        expect(response.status).toEqual(200);
        expect(creatorMock.suffix).toBe(response[0].suffix);
    });

    it('Deve remover um creator do banco', async() => {
        const creatorMock = createCreatorMock();

        await request(app).post('/api/creators').send(creatorMock);

        const response = await request(app).delete('/api/creators/6636cc9b9a09d997d78aa205');

        expect(response.status).toEqual(204);
    });
});