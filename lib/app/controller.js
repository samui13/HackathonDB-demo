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
		}]).
    controller('productCtrl',
	      ['$scope','$routeParams','ProductListService',
	       function($scope,$routeParams,productList){
		   $scope.id = $routeParams['id'];
		   $scope.product = productList[$scope.id];
		   
	       }]);
    
