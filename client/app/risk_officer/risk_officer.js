'use strict';

angular.module('yod3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('risk_officer', {
        url: '/risk_officer',
        templateUrl: 'app/risk_officer/risk_officer.html',
        controller: 'RiskOfficerCtrl'
      });
  });