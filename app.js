
var app = angular.module("appFavoris", ['ui.router','restangular']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {
                return service.getBirth();
            }],
        },
      })

  });
