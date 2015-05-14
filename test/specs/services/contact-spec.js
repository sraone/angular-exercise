describe('Contact', function() {

    beforeEach(module('app.services'));

    it('check the existence of Contact factory', inject(function(Contact) {
        expect(Contact).toBeDefined();
    }));

});
