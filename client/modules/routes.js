(function() {

    var app = angular.module('app');

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/notes', {
                templateUrl: '../templates/notes.html '
            })
            .when('/users', {
                templateUrl: '../templates/users.html'
            })
            .when('/', {
                templateUrl: '../index.html'
            })
            .when('/material', {
                templateUrl: '../templates/material.html'
            })
            .when('/login', {
                templateUrl: '../templates/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/notes'
            });
    });

    app.run(function($http, $localStorage) {
        $http.defaults.headers.common.Authorization = 'Bearer' + $localStorage.currentUser.token;
    });

})();
