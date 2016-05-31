
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
        template: '<div>You are borned<br><button ui-sref="birth.childhood">childhood</button><div ui-view></div></div>'
      })
      .state('birth.childhood', {
        url: '/childhood',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getChildhood();

            }],
        },
        template: '<div>You are grown up<br><button ui-sref="birth.childhood.study">study</button><br><button ui-sref="birth.childhood.career">career</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study', {
        url: '/study',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getStudy();

            }],
        },
        template: '<div>Really ?<br><button ui-sref=".phd">phd</button> <button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study.phd', {
        url: '/phd',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getPhd();

            }],
        },
        template: '<div>Great, What next ?<br><button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career', {
        url: '/career',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getCareer();

            }],
        },
        template: '<div>GoodLuck !<br><button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      });


  });
