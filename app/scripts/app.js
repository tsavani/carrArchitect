'use strict';

/**
 * @ngdoc overview
 * @name carProductApp
 * @description
 * # carProductApp
 *
 * Main module of the application.
 */
angular
  .module('carProductApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
       .when('/car', {
        templateUrl: 'views/car.html',
        controller: 'CarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
