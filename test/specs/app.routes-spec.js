describe('Routes', function(){
	var state;

	beforeEach(module('app', 'app.form', 'app.resource'));

	beforeEach(inject(function($templateCache, _$state_){

		state = _$state_;

		$templateCache.put('app/main/main.html');
		$templateCache.put('app/form/form.html');
		$templateCache.put('app/resource/resource.html');

	}));

	it('should return expected URL', function() {
		expect(state.href('form')).toEqual('/form')
	});

});