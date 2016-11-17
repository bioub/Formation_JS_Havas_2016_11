(function() {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'contact-list.controller',
  ]);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); // IE10+

    $routeProvider.when('/', {
      controller: 'ContactListCtrl',
      templateUrl: '/app/contact-list/contact-list.template.html',
    });

    $routeProvider.when('/ajouter', {
      templateUrl: '/app/contact-add/contact-add.template.html',
    });


  }]);

}());