(function(){

  angular
    .module('config')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
      })
      .state('construction', {
        url: "/underconstruction",
        templateUrl: 'views/construction.html'        
      });


      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);


})();
