describe('FormController', function() {

    beforeEach(module('app.form'));

    it('check the existence of FormController', inject(function($controller) {
        expect($controller('FormController')).toBeDefined();
    }));

});
