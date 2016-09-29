angular.module('todoApp', []).controller('TodoListController', function() {
    var vm = this;

    vm.todos = [{
        text: 'task one',
        done: true
    }, {
        text: 'task two',
        done: false
    }, {
        text: 'tast three',
        done: false
    }];

    vm.addTodo = function() {
        vm.todos.push({
            text: vm.todoText,
            done: false
        });
        vm.todoText = '';
    };

    vm.remaining = function() {
        var count = 0;
        angular.forEach(vm.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    }

    vm.clearCompleted = function() {
        console.log("clear completed");
        vm.todos = vm.todos.filter(function(todo) {
            return !todo.done;
        });
    };
});
