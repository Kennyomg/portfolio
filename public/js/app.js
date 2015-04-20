'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ngResource',
  'angularFileUpload'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'MyCtrl1'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'MyCtrl2'
    }).
    when('/blog', {
      templateUrl: 'partials/blog',
      controller: 'MyCtrl2'
    }).
    when('/games', {
      templateUrl: 'partials/games',
      controller: 'GamesController'
    }).
    when('/games/add', {
      templateUrl: 'partials/addGame',
      controller: 'GamesController'
    }).
    when('/games/:id', {
      templateUrl: 'partials/readGame',
      controller: 'GamesController'
    }).
    when('/games/edit/:id', {
      templateUrl: 'partials/editGame',
      controller: 'GamesController'
    }).
    when('/websites', {
      templateUrl: 'partials/websites',
      controller: 'WebsitesController'
    }).
    when('/websites/add', {
      templateUrl: 'partials/addWebsite',
      controller: 'WebsitesController'
    }).
    when('/websites/:id', {
      templateUrl: 'partials/readWebsite',
      controller: 'WebsitesController'
    }).
    when('/websites/edit/:id', {
      templateUrl: 'partials/editWebsite',
      controller: 'WebsitesController'
    }).
    when('/softwares', {
      templateUrl: 'partials/softwares',
      controller: 'SoftwaresController'
    }).
    when('/softwares/add', {
      templateUrl: 'partials/addSoftware',
      controller: 'SoftwaresController'
    }).
    when('/softwares/:id', {
      templateUrl: 'partials/readSoftware',
      controller: 'SoftwaresController'
    }).
    when('/softwares/edit/:id', {
      templateUrl: 'partials/editSoftware',
      controller: 'SoftwaresController'
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});
