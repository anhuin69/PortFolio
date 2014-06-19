'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/education', {templateUrl: 'partials/education.html', controller: 'MainController'});
  $routeProvider.when('/skills', {templateUrl: 'partials/skills.html', controller: 'SkillsController'});
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'MainController'});
  $routeProvider.when('/work', {templateUrl: 'partials/work.html', controller: 'MainController'});
  $routeProvider.otherwise({redirectTo: '/skills'});
}]);
