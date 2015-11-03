'use strict';

angular.module('yod3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('d3', {
        url: '/d3',
        templateUrl: 'app/d3/d3.html',
        controller: 'D3Ctrl'
      });

    $stateProvider
      .state('d3.sankey', {
        url: '/sankey',
        templateUrl: 'app/d3/partials/sankey.html',
        controller: 'sankeyCtrl'
      })
      .state('d3.pipeline_health', {
        url: '/pipeline_health',
        templateUrl: 'app/d3/partials/pipeline_health.html',
        controller: 'pipelineHealthCtrl'
      })
      .state('d3.alert_panel', {
        url: '/alert_panel',
        templateUrl: 'app/d3/partials/alert_panel.html',
        controller: 'alertPanelCtrl'
      })
      .state('d3.delinquent', {
        url: '/delinquent',
        templateUrl: 'app/d3/partials/delinquent.html',
        controller: 'delinquentCtrl'
      });

  });
