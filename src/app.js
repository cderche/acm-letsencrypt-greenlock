const   express = require('express')
        , bodyParser = require('body-parser')
        , app = express();

app.use(bodyParser.json());

app.post('/domains', (req, res) => {
    if (!req.body.hasOwnProperty('hostname')) {
        res.sendStatus(400);
    } else if (!require('./domainValidator').isValid(req.body.hostname)) {
        res.sendStatus(422);
    } else {
        // Handle domain creation
    }
});

module.exports = app