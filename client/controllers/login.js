angular.module('app').controller('LoginCtrl', function(loginService) {
    var vm = this;
    name = '';
    password = '';

    vm.login = function() {
        name = vm.name;
        password = vm.password;
        alert(name + password);
    }



})
