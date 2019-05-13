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

describe("Validate Domain Names", () => {

    for (let i = 0; i < invalidDomains.length; i++) {
        const element = invalidDomains[i];
        const title = "Invalid domain: " + element
        
        test(title, () => {
            expect(domainValidator.isValid(element)).toBe(false);
        });
    }

    for (let i = 0; i < validDomains.length; i++) {
        const element = validDomains[i];
        const title = "Valid domain: " + element
        
        test(title, () => {
            expect(domainValidator.isValid(element)).toBe(true);
        });
    }

});