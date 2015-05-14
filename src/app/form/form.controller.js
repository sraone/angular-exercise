(function() {

    angular
        .module('app.form')
        .controller('FormController', formController);

    function formController() {

        var vm = this;

        vm.name = null;
        vm.dob = null;
        vm.email = null;
        vm.group = null;
        vm.favourite = false;
        vm.groups = ['Home', 'Office'];

    };

})();
