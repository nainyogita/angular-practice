angular.module('app').service('AuthenticationService', ['$http', '$localStorage', function($http, $localStorage) {
    var currentUser = {};

    this.loginFunction = function(username) {

        return $http.post('/login', username).
        success(function(response) {
                console.log('Success');
                console.log(response);
            })
            .error(function(response) {
                console.log('error');
            });
    }

    this.setCredentials = function(username, token) {
        currentUser.username = username;
        currentUser.token = token;

        $localStorage.currentUser = currentUser;
        console.log($localStorage);
        $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
    }


    this.clearCredentials = function() {
        currentUser = {};
        delete $localStorage.currentUser;
        console.log($localStorage);
    }

}]);

// .service('LoginInterceptor', ['$localStorage', function(AuthenticationService, $localStorage) {
//     var service = this;
//     console.log('inside LoginInterceptor');
//     service.request = function(config) {
//         var currentUser = $localStorage.currentUser;
//         config.headers.authorization = currentUser.token;
//         return config;
//     }
// }]);
