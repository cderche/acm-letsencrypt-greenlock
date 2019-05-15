require('dotenv').config();
const {defaults} = require('jest-config');

module.exports = {
    "globalSetup": "<rootDir>/test.setup.js"
    , "globalTeardown": "<rootDir>/test.teardown.js"
}