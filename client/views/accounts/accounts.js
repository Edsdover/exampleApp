'use strict';

angular.module('poseidon')
.controller('AccountsCtrl', function($scope, Account){
  var afUser = $scope.afUser = Account.init();
  afUser.$loaded().then(syncNames);

  $scope.addAccount = function(name){
    Account.add(name).then(syncNames);
    $scope.accountName = '';
  };
  $scope.addTransaction = function(name, tx){
    Account.addTransaction(name, tx);
  };
  $scope.delTransaction = function(tx, index){
    Account.delTransaction(tx, index);
  };
  function syncNames(){
    $scope.names = afUser.names ? afUser.names.split(',') : [];
  }
});
