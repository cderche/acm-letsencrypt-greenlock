const domainValidator = require("./domainValidator");

const invalidDomains = [
    '..com'
    , 'a!pple.com'
    , 'w@ikipedia.com'
    , 'g#oogle.com'
    , 'a$pple.com'
    , 'w%ikipedia.com'
    , 'g%oogle.com'
    , 'a^pple.com'
    , 'w&ikipedia.com'
    , 'g*oogle.com'
    , 'a(pple.com'
    , 'w)ikipedia.com'
    , 'g_oogle.com'
    , 'a+pple.com'
    , 'google'
]

const validDomains = [
    'apple.com'
    , 'google.com'
    , 'google.ru'
    , 'google.fr'
    , 'app.google.com'
    , 'www.my-website.com'
]

const validateDomains = (array, expectedOutcome) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        test(element, () => {
            expect(domainValidator.isValid(element)).toBe(expectedOutcome);
        });
    }
}

describe("Validate Domain Names", () => {

    validateDomains(invalidDomains, false);
    validateDomains(validDomains, true);

});