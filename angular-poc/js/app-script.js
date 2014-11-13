var myapp = angular.module('myapp');

myapp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
        })

        .when('/perspectiveEditor', {
                templateUrl : 'pages/perspectiveEditor.html',
                controller  : 'perspectiveEditorController'
        })

        .when('/dynamicPerspective', {
                templateUrl : 'pages/dynamicPerspective.html',
                controller  : 'dynamicPerspectiveController'
        });
    });

myapp.controller('mainController', function($scope, $location) {
        // $scope.go = function ( path ) {
        //     $location.path( path );
        // };
        $scope.message = 'Here is the Main Controller';
        
});

myapp.controller('perspectiveEditorController', function($scope) {
        $scope.message = 'Perspective Editor Controller!';
});

myapp.controller('dynamicPerspectiveController', function($scope) {
        $scope.message = 'Dynamic Perspective Controller.';
});

