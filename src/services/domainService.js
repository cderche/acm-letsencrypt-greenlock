const AWS = require('aws-sdk');
AWS.config.update({region: process.env.AWS_DEFAULT_REGION});
AWS.config.setPromisesDependency(require('bluebird'));
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const TableName = process.env.AWS_DYNAMODB_TABLE_NAME;

const getParams = (params) => {
    return {
        TableName
        , Key: { Hostname: params.Hostname }
    }
}

const putParams = (params) => {
    return {
        TableName
        , Item: params
    }
}

const service = {};

service.count = () => {
    console.debug('domainService.count()');
    return docClient.scan({ TableName, Select: "COUNT" }).promise();
}

service.setDomain = (params) => {
    console.debug('domainService.setDomain()');
    return docClient.put(putParams(params)).promise();
}

service.getDomain = (params) => {
    console.debug('domainService.getDomain()');
    return docClient.get(getParams(params)).promise();
}

module.exports = service;