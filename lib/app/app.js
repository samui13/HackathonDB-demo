angular.
    module('angularApp',[
	'ngRoute',
	'MainCtrls',
	'productList'
    ]).
    config(['$locationProvider','$routeProvider',
	    function($locationProvider,$routeProvider){
		$routeProvider.
		    when('/',{
			templateUrl:'partials/index.html',
			controller:'indexCtrl',
			title:"Index",
		    }).
		    when('/register',{
			templateUrl:'partials/register.html',
			controller:'registerCtrl',
			title:"Register",			
		    }).
		    when('/product/:id',{
			templateUrl:'partials/product.html',
			controller:'productCtrl',
			title:"Product",
		    }).
		    otherwise({
			retidectTo:'/'
		    });
    		//$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	    }]).
    run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
	    $rootScope.title = '';
            $rootScope.title = current.$$route.title;
	});
    }]);
