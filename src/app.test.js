const request = require('supertest');
const app = require('./app');

const array = [
    { name: "No hostname", path: "/domains", statusCode: 400 }
    , { name: "Invalid hostname", path: "/domains", body: { hostname: "invalid" }, statusCode: 422 }
    // , { name: "Existing hostname", path: "/domains", body: { hostname: "existing.com" }, statusCode: 409 }
    // , { name: "New hostname", path: "/domains", body: { hostname: "new.com" }, statusCode: 200 }
    // , { name: "Unknown error", path: '/domains', body: { hostname: "unknown.com" }, statusCode: 400 }
]

describe('POST /domains', () => {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        test(element.name, () => {
            return request(app).post(element.path).send(element.body).then(response => {
                expect(response.statusCode).toBe(element.statusCode);
            });
        });
    }

});