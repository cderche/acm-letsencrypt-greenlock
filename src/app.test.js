const request = require('supertest');
const app = require('./app');

const array = [
    { name: "No hostname", path: "/register", statusCode: 400 }
    , { name: "Invalid hostname", path: "/register?hostname=invalid", statusCode: 422 }
    // , { name: "Existing hostname", path: "/register?hostname=existing.com", statusCode: 409 }
    // , { name: "New hostname", path: "/register?hostname=fail_.com", statusCode: 200 }
]

describe('GET /register', () => {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        test(element.name, () => {
            return request(app).get(element.path).then(response => {
                expect(response.statusCode).toBe(element.statusCode);
            });
        });
    }

});