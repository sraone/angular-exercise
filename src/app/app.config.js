(function(){

	angular
		.module('app')
		.config(appConfig);

	appConfig.$inject = ['$locationProvider'];

	function appConfig(locationProvider){
		
		locationProvider.html5Mode(true);

	};

})();