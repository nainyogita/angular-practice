angular.module('app').controller('SocketCtrl', ['$localStorage', '$window', 'socketFactory', function($localStorage, $window, socketFactory) {
    var vm = this;
    var socket = socketFactory();

    var senderDetails = $localStorage.currentUser;
    console.log(senderDetails);
}]);


//LUV CODE



//   var senderInfo = $localStorage['userInfo'];
//
//   socket.on('display-ou-list', populateListCallback);
//   vm.sendRequest = function(user){
//     /*
//     The 'parameters' is a JSON that contains information
//     about the sender and the receiver
//     */
//     var parameters = {
//       'sender' : senderInfo['username'],
//       'receiver' : user['username']
//     }
//     /*
//     Event : send-request-alert
//     Type : emit
//     Usage : Sends a connection request to the receiver
//     */
//     socket.emit('send-request-alert', parameters);
//   }
//
//   /*
//   Event : show-request-alert
//   Type : on
//   Usage : Displays alert to the recepient for a request to connect
//   */
//
//   socket.on('show-request-alert', ShowRequestAlert)
//
//   /*
//   Callback space
//   */
//
//   function populateListCallback(array){
//     /*
//     This array consists of the list of the online users
//     Send this to ng-repeat directive in the chat.html page
//     to display a list of online users
//     */
//     vm.users = array;
//   }
//
//   function ShowRequestAlert(sender){
//     var response = $window.confirm("Do you want to accept a chat invitation from " + sender['username']);
//   }
// }
