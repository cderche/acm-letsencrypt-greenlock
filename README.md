# acm-letsencrypt-greenlock-express

## TODO:

1. Register domains thorugh `/register`.
    a. Create object in DynamoDB
    b. Run greenlock.register

2. Challenge
    a. Store challenge data in DynamoDB
    b. Update DynamoDB with the Challenge result

3. Storage
    a. Store the Certificate in ACM