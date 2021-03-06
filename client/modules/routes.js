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
            .when('/chat', {
                templateUrl: '../templates/chat.html',
                controller: 'SocketCtrl'
                    // controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/notes'
            });
    });

    app.run(function($http, $localStorage) {
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
        }
    });

})();
