const   express = require('express')
        , bodyParser = require('body-parser')
        , app = express()
        , domainService = require('./services/domainService')();

app.use(bodyParser.json());

app.post('/domains', (req, res) => {
    if (!req.body.hasOwnProperty('Hostname')) {
        res.sendStatus(400);
    } else if (!require('./domainValidator').isValid(req.body.Hostname)) {
        res.sendStatus(422);
    } else {
        // Handle domain creation
        const params = { Hostname: req.body.Hostname };
        // console.log(params);
        
        return domainService.putDomain(params).then(data => {
            // console.debug('Created domain', JSON.stringify(data));
            res.json(data);
        }).catch(err => {
            console.error("Error:", err.message);
            res.sendStatus(409);
        });
    }
});

module.exports = app