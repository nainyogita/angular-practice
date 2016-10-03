angular.module('app').controller('LoginCtrl', function(loginService) {
    var vm = this;
    // vm.user = {};

    vm.login = function() {
        // vm.user.name = vm.name;
        // vm.user.password = vm.password;
        alert(vm.user.name + vm.user.password);
        loginService.loginFunction(vm.user);
    }



})
