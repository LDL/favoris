
var app = angular.module("appFavoris", ['ui.router','restangular']);


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',

        resolve: {
            categories: ['service',
                function(service) {
                return service.initRubrique();
            }],
        },
        controller: 'myCtrl',
        templateUrl: "template/home.html"
      })

  });
