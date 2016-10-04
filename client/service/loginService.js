angular.module('app').service('AuthenticationService', ['$http', '$localStorage', function($http, $localStorage) {
    var currentUser = {};

    this.loginFunction = function(username) {

        return $http.post('/login', username).
        success(function(response) {
                // console.log(response);
                // if (response.success == true) {
                //     console.log('hii');
                // } else if (response.success == false) {
                //
                // } else {
                //     console.log('hehe');
                // }
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
        $http.defaults.headers.common.Authorization = 'Bearer' + $localStorage.currentUser.token;
    }

    this.clearCredentials = function() {
        currentUser = {};
        delete $localStorage.currentUser;
        console.log($localStorage);
    }

}]);
