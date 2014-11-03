'use strict';

/**
 * @ngdoc function
 * @name jatodoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jatodoAngularApp
 */
angular.module('jatodoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
