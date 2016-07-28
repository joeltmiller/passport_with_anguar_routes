angular.module('passportApp').controller('LoginController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.email = '';  //username
  vm.wordpass = ''; //password

  vm.login = function(){
    console.log('Username', vm.email);
    console.log('Password', vm.wordpass);

    var sendData = {};

    sendData.email = vm.email;
    sendData.wordpass = vm.wordpass;

    $http.post('/login', sendData).then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Success', response);
    $location.path('/success');
  };

  function handleFailure(response){
    console.log('Failure', response);
    $location.path('/failure');
  };
}]);
