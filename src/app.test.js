const request = require('supertest');
const app = require('./app');

describe('GET /register', () => {
    test('No hostname was entered.', () => {
        return request(app).get("/register").then(response => {
            expect(response.statusCode).toBe(400);
        });
    });
    test("Invalid hostname was entered", () => {
        return request(app).get("/register?hostname=..com").then(response => {
            expect(response.statusCode).toBe(422);
        });
    })
});