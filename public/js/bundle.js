(function () {
	"use strict";
	  angular.module('headerCtrl', ['ui.bootstrap']);
    angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('helpUsCtrl', ['ui.bootstrap', 'ui.calendar']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('contactCtrl', ['ui.bootstrap']);
		//
		angular.module('dataconfig', []);
    angular.module('directives', []);

    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router','directives', 'config','dataconfig','homeCtrl','headerCtrl','helpUsCtrl','ourStoryCtrl','contactCtrl']);

})();

(function(){
 "use strict";

  angular.module('contactCtrl').controller('ContactController', ['$state','redInfo','$window', function($state, redInfo, $window){
    var vm = this;
    vm.title = "Help Us";
    vm.mainImage = "img/contactus.jpg";

    /*Cards*/
    vm.cards = [
      {"id":"0", "type":"contact-link", "connectType":"email", "icon":"fa-envelope", "header":"Email", "linkText":"Message 1Reddbag@gmail.com", "url":"ex.mail"},
      {"id":"1", "type":"contact-link", "connectType":"facebook", "icon":"fa-facebook-square", "header":"Facebook", "linkText":"Visit Out Page", "url":"ex.facebook"},
      {"id":"2", "type":"contact-link", "connectType":"instagram", "icon":"fa-instagram", "header":"Instagram", "linkText":"Check Out Our Posts", "url":"ex.instagram"}
    ];
    vm.externalUrlLink = function(external) {
      console.log(external);
      $window.open(redInfo.links(external), '_blank');
    }

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
        {"id":"0", "type":"mail-link", "icon":"fa-envelope", "header":"Join Email List", "link":"mailto:1Reddbag@gmail.com?subject=Join The Email List", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"id":"1", "type":"text-link", "icon":"fa-usd", "header":"Donate", "link":"app.construction", "text":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"id":"2", "type":"text-link", "icon":"fa-sign-language", "header":"Become A Sponsor", "link":"app.construction", "text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];
      /*Calender*/
      vm.alertOnEventClick = function(date, jsEvent, view) {
        vm.selectedTrip = date;
      }
      /*Configurations*/
      vm.uiConfig = {
        "calendar":{
          //"height": 400,
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
      //vm.active;

      vm.slides = [
        {"id":"0","image":"img/t0.jpg","text":""},
        {"id":"1","image":"img/t1.jpg","text":""},
        {"id":"2","image":"img/t2.jpg","text":""},
        {"id":"3","image":"img/t3.jpg","text":""},
        {"id":"4","image":"img/t4.jpg","text":""}];

      vm.cards = [
        {"id":"0", "type":"text-link", "icon":"fa-heartbeat", "header":"Our Mission", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link":"app.ourstory"},
        {"id":"1", "type":"text-link", "icon":"fa-users", "header":"How To Help", "text":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "link":"app.helpus"},
        {"id":"2", "type":"news-link", "icon":"fa-newspaper-o", "header":"News", "date":"2016-05-20", "text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "link":"app.construction"}
      ];
    }]);

})();

(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', 'redInfo',function($state,redInfo){
    var vm = this;
    vm.title = "Our Story";
    vm.mainImage = "img/ourstory.jpg";
    vm.stories = redInfo.testimonies.all();

    vm.tabs = [
      {"id":0, "title":"About One Red Bag", "type":"main-story", "img":"img/aboutorb.jpg", "contentTitle":"Our Story", "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},
      {"id":1, "title":"What We Do", "type":"story-timeline","stories":[{"title":"Building", "img":"fa-truck","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Encouraging", "img":"fa-thumbs-o-up","content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."},{"title":"Reaching Out", "img":"img/Logo_bw.png","content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}]},
      {"id":2, "title":"Volenteer Stories", "type":"member-stories", "stories": redInfo.testimonies.all() }
    ];

  }]);

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
      var testimonies = redBagData.testimonies;

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
        },
        testimonies: {
          all: function() {
            return testimonies;
          },
          byName: function(name) {
            return;
          }
        },
        links: function(external){
          switch(external) {
            case 'ex.facebook':
              return "http://www.facebook.com";
              break;
            case 'ex.mail':
              return "mailto:1Reddbag@gmail.com";
              break;            
            default:
              return;
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
       vm.testimonies = [
          {"name":"Test Redding","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."},
          {"name":"Test Wilson","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
          {"name":"Test Star","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."},
          {"name":"Test Johnson","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."}];
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
      .state('app.ourstory', {
        url: "ourstory",
        views: {
          'content@': {
            templateUrl: 'views/ourstory.html',
            controller: 'OurStoryController as oc'
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
