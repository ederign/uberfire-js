var myapp = angular.module('myapp', ['ngRoute']);

myapp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
        })

        .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
        })

        .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
        });
    });

myapp.controller('mainController', function($scope) {
        $scope.message = 'Here is the Main Controller';
});

myapp.controller('aboutController', function($scope) {
        $scope.message = 'About Controller!';
});

myapp.controller('contactController', function($scope) {
        $scope.message = 'Contact Controller.';
});