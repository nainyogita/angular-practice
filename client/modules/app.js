//Wrapping javascript in closure is a good habit
(function() {
    var a = 5; //variale declared outside module accessed inside controller

    //first param is module name, second param is dependecies on other modules
    var app = angular.module('app', ['todoController', 'ngRoute', 'maskController', 'appRoutes']);

    //Custome Directives
    //can also use ng-include , but best to use expanding directive
    //Template Expanding directive, E---- > Element
    //A -->Attribute directive <h3 prodcut-title></h3>

    app.directive('productInfo', function() {
        return {
            restrict: 'E', //Type of Directive, E for element
            templateUrl: './templates/product-info.html'
        };
    });

    //Syntax for using services
    app.controller('serviceExample', ['$http', function($http) {
        var vm = this;
        //initialize to an empty array since page renders before data returns
        vm.a = [];
        $http.get('/abc.json').success(function(data) {
            //do something with data;

            //WRONG --> this inside callback is the service
            //this.a = data;

            vm.a = data; //async request to fetch value of a , might take some time... initialize a so that empty a is loaded
        });
    }]);


})();

//app.js is top level module
//dependencies on controller modules and directive modules
//split modules on basis of functionalities
