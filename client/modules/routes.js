(function() {

    var app = angular.module('appRoutes', ['ngRoute']);

    app.config(function($routeProvider) {

        $routeProvider.when('/notes', {
                templateUrl: '../templates/notes.html '
            })
            .when('/users', {
                templateUrl: '../templates/users.html'
            })
            .when('/', {
                templateUrl: '../index.html'
            })
            .otherwise({
                redirectTo: '/notes'
            });
    });

})();
