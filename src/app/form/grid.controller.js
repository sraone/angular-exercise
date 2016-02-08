  angular.module('app.form')
      .controller('GridController, ['$http', '$scope', function($http, $scope){
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.id = 0;
            $scope.data = [];
            
            $scope.search = function(){
                $http.post('api/search', {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    id: $scope.id
                }).then(function(res){
                    $scope.data = res.data || [];
                });
            };
      }]);
