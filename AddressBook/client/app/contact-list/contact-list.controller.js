(function() {
  'use strict';

  var module = angular.module('contact-list.controller', []);

  module.controller('ContactListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.contacts = [];

    $http.get('/api/contacts').then(function(res) {
      $scope.contacts = res.data;
    });

    $scope.supprimer = function (i) {
      $scope.contacts.splice(i, 1);
    };
  }]);

}());