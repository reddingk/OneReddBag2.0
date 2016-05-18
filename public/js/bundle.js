(function () {
	"use strict";
	  angular.module('headerCtrl', ['ui.bootstrap']);
    angular.module('homeCtrl', ['ui.bootstrap']);
    angular.module('directives', []);

    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router', 'directives', 'config','homeCtrl','headerCtrl']);

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
      .state('app', {
        url: "/",
        views: {
          'content':{
            templateUrl: 'views/home.html',
            controller: 'HomeController as hc'
          },
          'header':{
            templateUrl: 'views/templates/_header.html',
            controller: 'HeaderController as hdc'
          },
          'footer':{}
        }
      })
      .state('app.construction', {
        url: "/underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });


      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);


})();

  (function(){
   "use strict";

    angular.module('headerCtrl').controller('HeaderController', ['$state', function($state){
      var vm = this;
      vm.checkActivePage = checkActivePage;

      function checkActivePage(current) {
			     var currentPage = $state;
           if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
			     else { return false; }
		  }
    }]);

})();

(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state',function($state){
      var vm = this;
      vm.title = "Home";
    }]);

})();

(function(){
   "use strict";

    angular.module('directives').directive('navHold', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          angular.element($window).bind("scroll", function() {

            var topSection = angular.element(document.getElementsByClassName("mainBody"))[0];
            var windowp = angular.element($window)[0];
            var topThreshhold = topSection.offsetTop - element[0].clientHeight

            if(windowp.pageYOffset >= topThreshhold){
              if(!element.hasClass("screenPass")){
                element.addClass("screenPass");
              }
            }
            else {
              if(element.hasClass("screenPass")){
                element.removeClass("screenPass");
              }
            }

          });
        }
      }

    }]);

})();
