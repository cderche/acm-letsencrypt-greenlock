const AWS = require('aws-sdk');
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION
    , endpoint: process.env.DYNAMO_ENDPOINT
});
AWS.config.setPromisesDependency(require('bluebird'));
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const TableName = process.env.AWS_DYNAMODB_TABLE_NAME;

const putParams = (params) => {
    return {
        TableName
        , Item: params
        , ConditionExpression: "attribute_not_exists(Hostname)"
    }
}

const getParams = (params) => {
    return {
        TableName
        , Key: { Hostname: params.Hostname }
    }
};

module.exports = () => {

    const handlers = {

        count: () => {
            // console.debug('domainService.count()');
            return docClient.scan({ TableName, Select: "COUNT" }).promise();
        }

        , putDomain: (params) => {
            // console.debug('domainService.putDomain()', params);
            return docClient.put(putParams(params)).promise();
        }

        , getDomain: (params) => {
            // console.debug('domainService.getDomain()', params);
            return docClient.get(getParams(params)).promise();
        }

    }

    return handlers;

}