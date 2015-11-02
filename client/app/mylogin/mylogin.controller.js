'use strict';

angular.module('yod3App.login')
  .controller('MyloginCtrl', function ($scope, Auth, $location) {

    var vm = this;

    vm.user = {};

    // note, these field types will need to be
    // pre-defined. See the pre-built and custom templates
    // http://docs.angular-formly.com/v6.4.0/docs/custom-templates
    vm.userFields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      },
      {
        key: 'checked',
        type: 'checkbox',
        templateOptions: {
          label: 'Check me out'
        }
      }
    ];

    vm.login = function(form) {

      $scope.submitted = true;

      $scope.user = $scope.user || {};
      var email = $scope.user.email || 'test@test.com';
      var password = $scope.user.password || 'test';

      //if(form.$valid) {
        Auth.login({
          email: email,
          password: password
        })
          .then( function(token) {

            //console.log('hope it pass.', token);
            // Logged in, redirect to home
            //$location.path('/');
            console.log($location);
            window.location.href = 'http://localhost:9000';
          })
          .catch( function(err) {
            $scope.errors.other = err.message;
          });
      //}

    };

    vm.submit = vm.login;

  });
