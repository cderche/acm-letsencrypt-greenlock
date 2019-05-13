const domainService = require('./domainService');

const AWS = require('aws-sdk');
AWS.config.update({region: process.env.AWS_REGION});
const ddb = new AWS.DynamoDB();

const TableName = process.env.AWS_DYNAMODB_TABLE_NAME

jest.setTimeout(120000);

beforeAll(() => {
    console.log("domainService.test.js beforeAll()");

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

        console.log("Initiated table creation.");

        const params2 = {
            TableName
        }

        return ddb.waitFor('tableExists', params2).promise().then(data => {
            console.log("Table creation completed.");
        }).error(err => {
            console.error("Error ddb.waitfor", err.message);
        });

    }).error(err => {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err));
    });
})

afterAll(() => {

    const params = {
        TableName
    }

    return ddb.waitFor('tableExists', params).promise().then(data => {
        return ddb.deleteTable(params).promise().then(data => {
            console.log("Deleted table.");
        }).error(err => {
            console.error("Unable to delete table. Error JSON:", JSON.stringify(err));
        });
    }).error(err => {
        console.error("Error ddb.waitfor", err.message);
    });
})

const params = {
    Hostname: 'google.com'
}

describe("Domain service", () => {

    test("setDomain", () => {

        return domainService.count().then(data => {
            const beforeCount = data.Count;

            return domainService.setDomain(params).then(data => {
                expect(data.Key).toBe(params.Key);

                return domainService.count().then(data => {
                    const afterCount = data.Count;
                    expect(afterCount).toBe(beforeCount + 1);
                });

            });

        }).error(err => {
            console.log("Error JSON:", JSON.stringify(err));
        })

    })

})