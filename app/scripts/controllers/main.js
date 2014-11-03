'use strict';

/**
 * @ngdoc function
 * @name jatodoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jatodoAngularApp
 */
angular.module('jatodoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
