import angular from 'angular';
import 'angular-route'; // Import ngRoute module

// Define the AngularJS app and include ngRoute
const app = angular.module('myApp', ['ngRoute']);

// Configure routes
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'public.html', // Public section
      controller: 'PublicController'
    })
    .when('/secure', {
      templateUrl: 'secure.html', // Secure section
      controller: 'SecureController',
      resolve: {
        auth: function($http, $location) {
          // Call API to validate login
          return $http.get('/api/validateLogin')
            .then(function(response) {
              if (!response.data.isAuthenticated) {
                $location.path('/'); // Redirect to public section if not authenticated
              }
            }, function() {
              $location.path('/'); // Redirect on error
            });
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});

// Public controller
app.controller('PublicController', function($scope) {
  $scope.title = 'Welcome to the Public Section';
});

// Secure controller
app.controller('SecureController', function($scope) {
  $scope.title = 'Welcome to the Secure Section';
});