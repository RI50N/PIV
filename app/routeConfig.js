angular
  .module("calc")
  .config(function($stateProvider, $urlRouterProvider) {
  // console.log($stateProvider);
    $stateProvider
      .state('index', {
        url: "/contatos",
        views: {
          'dashboard': {
            template: '<calc-dashboard></calc-dashboard>'
          }
        }
      });

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/contatos');
  });
