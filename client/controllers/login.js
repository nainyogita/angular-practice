angular.module('app').controller('LoginCtrl', ['$location', 'AuthenticationService', '$http', function($location, AuthenticationService, $http) {
    var vm = this;
    vm.c = {};

    vm.login = function() {

        AuthenticationService.loginFunction(vm.user)
            .then(function(response) {
                //If user authentication is successful
                if (response.data.success == true) {
                    console.log("LoginFunctionrESPONSE");
                    console.log(response);

                    //Set local Storage and add token to header
                    AuthenticationService.setCredentials(vm.user.name, response.data.token);

                    $http.get('/api/dashboard').success(function(response) {
                        console.log(response);
                    });
                    //AuthenticationService.clearCredentials();
                    //$location.path('/notes');
                }

                if (response.data.success == false) {
                    console.log(response);
                    $location.path('/login');
                }
            });
    }



}]);
