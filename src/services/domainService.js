const AWS = require('aws-sdk');
AWS.config.update({region: process.env.AWS_REGION});
AWS.config.setPromisesDependency(require('bluebird'));
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const TABLE_NAME = process.env.AWS_DYNAMODB_TABLE_NAME;

const getParams = (params) => {
    return {
        TableName: TABLE_NAME
        , Item: params
    }
}

const service = {};

service.count = () => {
    console.log('domainService.count()');
    return docClient.scan({ TableName: TABLE_NAME, Select: "COUNT" }).promise();
}

service.setDomain = (params) => {
    console.log('domainService.setDomain()');
    return docClient.put(getParams(params)).promise();
}

module.exports = service;