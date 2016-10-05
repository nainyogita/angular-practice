angular.module('app').service('socketService', function socketService(socketFactory){
  return socketFactory();
});
