[![CircleCI](https://circleci.com/gh/cderche/acm-letsencrypt-greenlock.svg?style=svg)](https://circleci.com/gh/cderche/acm-letsencrypt-greenlock)

[![Maintainability](https://api.codeclimate.com/v1/badges/7eea8f4f4408d74db5c9/maintainability)](https://codeclimate.com/github/cderche/acm-letsencrypt-greenlock/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7eea8f4f4408d74db5c9/test_coverage)](https://codeclimate.com/github/cderche/acm-letsencrypt-greenlock/test_coverage)

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
