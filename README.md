# acm-letsencrypt-greenlock-express

## TODO:

1. Register domains thorugh `/register`.
    1. Create object in DynamoDB
    2. Run greenlock.register

2. Challenge
    1. Store challenge data in DynamoDB
    2. Update DynamoDB with the Challenge result

3. Storage
    1. Store the Certificate in ACM
