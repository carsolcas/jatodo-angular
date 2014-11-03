'use strict';

/**
 * @ngdoc overview
 * @name jatodoAngularApp
 * @description
 * # jatodoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('jatodoAngularApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
