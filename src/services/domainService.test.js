const domainService = require('./domainService')();

const params = {
    Hostname: 'google.com'
}

describe("Domain service", () => {

    test("putDomain", () => {
        return domainService.count().then(data => {
            // console.log('domainService.count response', data);
            const beforeCount = data.Count;
            expect(beforeCount).toBe(0);

            return domainService.putDomain(params).then(data => {
                console.debug('domainService.putDomain response', data);
                // expect(data.Item.Hostname).toBe(params.Hostname);

                return domainService.count().then(data => {
                    // console.debug('domainService.count response', data);
                    const afterCount = data.Count;
                    expect(afterCount).toBe(beforeCount + 1);
                });

            });
        });
    });

    test("getDomain", () => {
        return domainService.getDomain(params).then(data => {
            // console.debug('domainService.getDomain response', data);
            expect(data.Item.Hostname).toBe(params.Hostname)
        })
    });

})