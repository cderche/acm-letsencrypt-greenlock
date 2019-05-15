const AWS = require('aws-sdk');
// AWS.config.update({ region: process.env.AWS_DEFAULT_REGION });
const ddb = new AWS.DynamoDB();

const TableName = process.env.AWS_DYNAMODB_TABLE_NAME;

module.exports = async () => {
    console.debug("Deleting table", TableName);

    const params = {
        TableName
    }

    return ddb.waitFor('tableExists', params).promise().then(data => {
        return ddb.deleteTable(params).promise().then(data => {
            console.debug("Deleted table.");
            return null;
        }).catch(err => {
            console.error("Unable to delete table. Error JSON:", JSON.stringify(err));
        });
    }).catch(err => {
        console.error("Error ddb.waitfor", err.message);
    });
}