const REGEX=/^([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/;

module.exports.isValid = (domain) => {
    return REGEX.test(domain);
}