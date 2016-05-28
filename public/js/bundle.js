(function () {
	"use strict";
	  angular.module('headerCtrl', ['ui.bootstrap']);
    angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('helpUsCtrl', ['ui.bootstrap', 'ui.calendar']);
		angular.module('contactCtrl', ['ui.bootstrap']);
		//
		angular.module('dataconfig', []);
    angular.module('directives', []);

    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router','directives', 'config','dataconfig','homeCtrl','headerCtrl','helpUsCtrl','contactCtrl']);

})();

(function(){
  'use strict';

  angular.module('config', [ 'ngMaterial' ]);

})();

(function(){
  'use strict';

  angular
    .module('dataconfig')
    .service('redInfo', [ 'redBagData', function RedInfo(redBagData){
      var bags = redBagData.bag_date;
      var news = redBagData.newsfeed;
      var trips = redBagData.trips_date;

      return {
        bags: {
          all: function(){
            return bags;
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
            return news;
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
        },
        trips:{
          all: function() {
            return trips;
          },
          byMonth: function(month) {
            // Get all trips for month
            return;
          },
          nextFew: function() {
            var today = new Date();
            var futureTrips = [];

            for(var i=0; i < trips.length; i++){
              if(trips[i].start >= today && futureTrips.length <= 3)
                futureTrips.push(trips[i]);
            }
            return futureTrips;
          }
        }
      }
    }])
    .factory("redBagData", ['$q', function($q){
     function RedBagInfoData() {
       var vm = this;
       //TEST
       var date = new Date();
       var d = date.getDate();
       var m = date.getMonth();
       var y = date.getFullYear();

       vm.bag_date = [{"date":"2015-07-01", "delivered":52}];
       vm.newsfeed = [{"date":"2016-06-24", "title":"Website Release", "content":"The Website is now live"}, {"date":"2015-07-01", "title":"TEST", "content":"Test News"}];
       vm.trips_date = [{title:'D.C. meetup', start:new Date("2016-06-25 13:00:00"), end:new Date("2016-06-25 18:00:00"), allDay:false, location: "Washington D.C. Union Station"},{title:'D.C. meetup', start:new Date("2016-07-02 13:00:00"), end:new Date("2016-07-02 18:00:00"), allDay:false, location: "Washington D.C. Union Station"}];
     }

     return new RedBagInfoData();
    }]);

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
          'footer':{
            templateUrl: 'views/templates/_footer.html'
          }
        }
      })
      .state('app.helpus', {
        url: "helpus",
        views: {
          'content@': {
            templateUrl: 'views/helpus.html',
            controller: 'HelpUsController as huc'
          }
        }
      })
      .state('app.contact', {
        url: "contact",
        views: {
          'content@': {
            templateUrl: 'views/contact.html',
            controller: 'ContactController as cc'
          }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });


      $urlRouterProvider.otherwise('/');
      //$locationProvider.html5Mode(true);
    }]);


})();

(function(){
 "use strict";

  angular.module('contactCtrl').controller('ContactController', ['$state', function($state){
    var vm = this;
    vm.title = "Help Us";
    vm.mainImage = "img/contactus.jpg";

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

    angular.module('helpUsCtrl').controller('HelpUsController', ['$state','redInfo', function($state, redInfo){
      //uiCalendarConfig
      var vm = this;
      vm.title = "Help Us";
      vm.mainImage = "img/helpus.jpg";
      vm.trips = redInfo.trips.all();
      vm.newFewTrips = redInfo.trips.nextFew();
      vm.selectedTrip = null;

      /*Cards*/
      vm.cards = [
        {"id":"0", "type":"text-link", "icon":"fa-envelope", "header":"Join Email List", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"id":"1", "type":"text-link", "icon":"fa-usd", "header":"Donate", "text":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"id":"2", "type":"text-link", "icon":"fa-sign-language", "header":"Become A Sponsor", "text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];
      /*Calender*/
      vm.alertOnEventClick = function(date, jsEvent, view) {
        vm.selectedTrip = date;
      }
      /*Configurations*/
      vm.uiConfig = {
        "calendar":{
          "height": 450,
          "editable": false,
          "header":{
            "left": "title", "center": '', "right": 'today prev, next'
          },
          eventClick: vm.alertOnEventClick
        }
      };

      vm.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event', currentTimezone: 'America/Washington DC'
      };

      vm.eventsF = function (start, end, timezone, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{title: 'Defalt ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
        callback(events);
      };
      vm.eventSources = [vm.trips, vm.eventSource, vm.eventsF];
    }]);

})();

(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state',function($state){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 5000;
      //vm.active = 1;
      //vm.noWrapSlides = false;

      vm.slides = [
        {"id":"0","image":"img/t0.jpg","text":""},
        {"id":"1","image":"img/t1.jpg","text":""},
        {"id":"2","image":"img/t2.jpg","text":""},
        {"id":"3","image":"img/t3.jpg","text":""},
        {"id":"4","image":"img/t4.jpg","text":""}];

      vm.cards = [
        {"id":"0", "type":"text-link", "icon":"fa-heartbeat", "header":"Our Mission", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link":"app.construction"},
        {"id":"1", "type":"text-link", "icon":"fa-users", "header":"How To Help", "text":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "link":"app.helpus"},
        {"id":"2", "type":"news-link", "icon":"fa-newspaper-o", "header":"News", "date":"2016-05-20", "text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "link":"app.construction"}
      ];
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
