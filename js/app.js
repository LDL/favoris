
var app = angular.module("appFavoris", ['ui.router','restangular']);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
  });

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
      }).state("Modal", {
        views:{
          "modal": {
            templateUrl: "template/home.html"
          }
        },
        abstract: true
      }).state("Modal.addRubrique", {
        views:{
          "modal": {
            templateUrl: "modals/addRubrique.html"
          }
        }
      });

  });
