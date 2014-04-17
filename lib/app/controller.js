angular.
    module('MainCtrls', []).
    controller('indexCtrl',
	       ['$scope','$http','ProductListService',
		function($scope,$http,productList){
		    $scope.title = "Index Page";
		    console.log(productList);
		    $scope.productList = productList;
		}]).
    controller('registerCtrl',
	       ['$scope','ProductListService',
		function($scope,productList){
		    console.log(productList);
		    $scope.productList = productList;
		}]);
    
