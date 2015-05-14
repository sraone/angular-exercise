(function () {
	
	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$urlRouterProvider', '$stateProvider'];

	function routes(routerProvider, stateProvider){

		routerProvider
			.otherwise('main');

		stateProvider
			.state('main', {
				url: '/main',
				templateUrl: 'app/main/main.html'
			})

			.state('form', {
				url: '/form',
				templateUrl: 'app/form/form.html'
			})

			.state('resource', {
				url: '/resource',
				templateUrl: 'app/resource/resource.html',
				controller: 'ResourceController',
				controllerAs: 'vm'
			});

	};

})();