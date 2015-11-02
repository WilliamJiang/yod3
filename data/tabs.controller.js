angular.module('yod3App.directive', [])
  .controller('View1Ctrl', tabCtrl);

tabCtrl.inject = ['$scope'];

function tabCtrl($scope) {

  $scope.tabs = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2'}
  ];
}
