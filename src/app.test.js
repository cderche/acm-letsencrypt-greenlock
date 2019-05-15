const request = require('supertest');
const app = require('./app');

const array = [
    { name: "No hostname", path: "/domains", statusCode: 400 }
    , { name: "Invalid hostname", path: "/domains", body: { Hostname: "invalid" }, statusCode: 422 }
    , { name: "New hostname", path: "/domains", body: { Hostname: "new.com" }, statusCode: 200 }
    // , { name: "Existing hostname", path: "/domains", body: { Hostname: "existing.com" }, statusCode: 409 }
    // , { name: "Unknown error", path: '/domains', body: { Hostname: "unknown.com" }, statusCode: 400 }
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