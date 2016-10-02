(function() {

    var app = angular.module('appRoutes', []);

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
            .when('/mask', {
                templateUrl: '../templates/mask.html'
            })
            .otherwise({
                redirectTo: '/notes'
            });
    });

})();
