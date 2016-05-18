(function () {
	"use strict";
    angular.module('homeCtrl', ['ui.bootstrap']);
    angular.module('directives', []);
    
    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router', 'directives', 'config','homeCtrl']);

})();

(function(){
  'use strict';

  angular.module('config', [ 'ngMaterial' ]);

})();

(function(){
  'use strict';

  angular
    .module('config')
    .factory('data', function(){
      var bag_date = [{"date":"2015-07-01", "delivered":52}];
      var newsfeed = [{"date":"2015-07-01", "title":"TEST", "content":"Test News"}];

      return {
        bags: {
          all: function(){
            return bag_date;
          },
          count: function(){
            return;
          },
          byYear: function(year) {
            // Get all bags delivered in year
            return;
          },
          byMonth: function(month, year) {
            // Get all bags delivered in month of specific year
            return;
          }
        },
        news: {
          all: function(){
            return newsfeed;
          },
          byYear: function(year) {
            // Get all news in year
            return;
          },
          byMonth: function(month, year) {
            // Get all news in month of specific year
            return;
          },
          recent: function() {
            return;
          }
        }
      }
    });

})();

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

(function(){
   "use strict";

    angular.module('homeCtrl', []).controller('HomeController', ['$state',function($state){
      var vm = this;
      vm.title = "Home";      
    }]);

})();
