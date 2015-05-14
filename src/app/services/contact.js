(function(){

	angular
		.module('app.services')
		.factory('Contact', contact);

	contact.$inject = ['$resource'];

	function contact(resource){

		return resource('app/data/:contactId.json', {},{
			query: {method: 'GET', params: {contactId: 'contacts'}, isArray: true}
		});

	};

})();