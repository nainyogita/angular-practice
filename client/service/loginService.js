angular.module('app').service('loginService', function($http, store) {
    var service = this,
        currentUser = null;

    this.loginFunction = function(user) {
        $http.post('/login', user).success(function(data) {
                // alert(data.success);
                // alert(data.token);
                if (data.success == true) {
                    currentUser.user = user;
                    currentUser.token = data.token;
                    store.set('currentUser', currentUser);
                    return currentUser;
                } else if (data.success == false) {
                    return null;
                }
            })
            .error(function(data) {
                alert('error');
            });
    }
});
