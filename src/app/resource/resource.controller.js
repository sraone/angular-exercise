(function() {

    angular
        .module('app.resource')
        .controller('ResourceController', resourceController);

    resourceController.$inject = ['Contact'];

    function resourceController(Contact) {

        var vm = this;
        vm.contacts = [];
        vm.selectedContact = null;

        vm.init = function() {
            vm.contacts = Contact.query();
        };

        vm.view = function(id) {
            vm.selectedContact = Contact.get({
                contactId: id
            });
        };

        vm.init();
    };

})();
