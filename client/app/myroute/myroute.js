'use strict';

angular.module('yod3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: '/myroute',
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });