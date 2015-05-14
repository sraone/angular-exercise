describe('ResourceController', function() {

    var httpBackend,
        controller,
        contacts = [{
            id: 1,
            name: 'test1'
        }, {
            id: 2,
            name: 'test2'
        }, {
            id: 3,
            name: 'test3'
        }];

    beforeEach(module('app.resource', 'app.services'));

    beforeEach(inject(function(_$httpBackend_, $controller) {

        httpBackend = _$httpBackend_;
        httpBackend.expectGET('app/data/contacts.json')
            .respond(contacts);
        controller = $controller('ResourceController', {});

    }));

    it('should create Contact model with 3 contacts', function() {
        expect(angular.equals(controller.contacts, [])).toBe(true);
        httpBackend.flush();
        expect(angular.equals(controller.contacts, contacts)).toBe(true);
    });

    it('should open selected contact 3', function() {
        var contact3 = {
            id: 3,
            name: 'test3',
            email: 'test3@email.com'
        };

        expect(angular.equals(controller.selectedContact, null)).toBe(true);
        httpBackend.expectGET('app/data/3.json')
            .respond(contact3);
        controller.view(3);
        httpBackend.flush();
        expect(angular.equals(controller.selectedContact, contact3)).toBe(true);
    });

});
