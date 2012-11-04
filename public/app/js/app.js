'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/walk', {templateUrl: 'partials/partial1.html', controller: MyCtrl2});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl1});
    $routeProvider.when('/respond', {templateUrl: 'partials/partial3.html', controller: MyCtrl1});
    $routeProvider.otherwise({redirectTo: '/view2'});
  }]);
