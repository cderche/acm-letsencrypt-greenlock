const AWS = require('aws-sdk');
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION
    , endpoint: process.env.DYNAMO_ENDPOINT
});
const ddb = new AWS.DynamoDB();

const TableName = process.env.AWS_DYNAMODB_TABLE_NAME;

module.exports = async () => {

    const params = {
        TableName
        , KeySchema: [
            { AttributeName: "Hostname", KeyType: "HASH" }
        ]
        , AttributeDefinitions: [
            { AttributeName: "Hostname", AttributeType: "S" }
        ]
        , ProvisionedThroughput: {       
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    }

    return ddb.createTable(params).promise().then(data => {

        console.debug("Initiated table creation.");

        const params2 = {
            TableName
        }

        return ddb.waitFor('tableExists', params2).promise().then(data => {
            console.debug("Table creation completed.");
            return null;
        }).catch(err => {
            console.error("Error ddb.waitfor", err.message);
        });

    }).catch(err => {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err));
    });

    

}

