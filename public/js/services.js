'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Games', ['$resource', function($resource){
    return $resource('/api/games/:id', null, {
      'update': { method:'PUT' }
    });
}]).
  factory('Websites', ['$resource', function($resource){
    return $resource('/api/websites/:id', null, {
      'update': { method:'PUT' }
    });
}]).
  factory('Softwares', ['$resource', function($resource){
    return $resource('/api/softwares/:id', null, {
      'update': { method:'PUT' }
    });
}]);
