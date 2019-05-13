const express = require('express');
const app = express();

app.get('/register', (req, res) => {
    if (!req.query.hasOwnProperty('hostname')) {
        res.sendStatus(422);
    }
})

module.exports = app