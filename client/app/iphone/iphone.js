'use strict';

angular.module('yod3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('iphone', {
        url: '/iphone',
        templateUrl: 'app/iphone/iphone.html',
        controller: 'IphoneCtrl'
      });
  });