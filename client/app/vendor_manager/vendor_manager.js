'use strict';

angular.module('yod3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vendor_manager', {
        url: '/vendor_manager',
        templateUrl: 'app/vendor_manager/vendor_manager.html',
        controller: 'VendorManagerCtrl'
      });
  });