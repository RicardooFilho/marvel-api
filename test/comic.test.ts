import comicSchema from "../src/comic/schemas/comic.schema";
import {createComicMock} from "./fixtures";
import comicService from "../src/comic/services/comic.service";
const express = require('express');
const app = express();
const request = require('supertest');

afterEach(async() => {
    await comicSchema.deleteMany();
});

describe('Testando endpoints de comics', () => {
    it('Deve inserir uma comic no banco', async() => {
        const comicMock = createComicMock();

        const response = await request(app).post('/api/comics').send(comicMock);
        const comicFound = await comicService.findAll();

        expect(response.status).toEqual(201);
        expect(response.body.id).toBeDefined();
        expect(comicMock.digitalId).toBe(comicFound[0].digitalId);
        expect(comicMock.title).toBe(comicFound[0].title);
        expect(comicMock.issueNumber).toBe(comicFound[0].issueNumber);
        expect(comicMock.variantDescription).toBe(comicFound[0].variantDescription);
        expect(comicMock.description).toBe(comicFound[0].description);
        expect(comicMock.isbn).toBe(comicFound[0].isbn);
        expect(comicMock.diamondCode).toBe(comicFound[0].diamondCode);
        expect(comicMock.format).toBe(comicFound[0].format);
        expect(comicMock.pageCount).toBe(comicFound[0].pageCount);
    });

    it('Deve buscar todas comics do banco', async() => {
        const comicMock = createComicMock();

        await request(app).post('/api/comics').send(comicMock);

        const response = await request(app).get('/api/comics');

        expect(response.status).toEqual(200);
        expect(response.body.id).toBeDefined();
        expect(comicMock.digitalId).toBe(response[0].digitalId);
        expect(comicMock.title).toBe(response[0].title);
        expect(comicMock.issueNumber).toBe(response[0].issueNumber);
        expect(comicMock.variantDescription).toBe(response[0].variantDescription);
        expect(comicMock.description).toBe(response[0].description);
        expect(comicMock.isbn).toBe(response[0].isbn);
        expect(comicMock.diamondCode).toBe(response[0].diamondCode);
        expect(comicMock.format).toBe(response[0].format);
        expect(comicMock.pageCount).toBe(response[0].pageCount);
    });

    it('Deve atualizar uma comic do banco', async() => {
        const comicMock = createComicMock();

        await request(app).post('/api/comics').send(comicMock);

        comicMock.title = "Another title";

        const response = await request(app).put('/api/comics/6636cc8c9a09d997d78aa1c1').send(comicMock);

        expect(response.status).toEqual(200);
        expect(comicMock.title).toBe(response[0].title);
    });

    it('Deve remover uma comic do banco', async() => {
        const comicMock = createComicMock();

        await request(app).post('/api/comics').send(comicMock);

        const response = await request(app).delete('/api/comics/6636cc8c9a09d997d78aa1c1');

        expect(response.status).toEqual(204);
    });
});