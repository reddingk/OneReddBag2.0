(function () {
	"use strict";
	  angular.module('headerCtrl', ['ui.bootstrap']);
    angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('helpUsCtrl', ['ui.bootstrap', 'ui.calendar']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('contactCtrl', ['ui.bootstrap']);
		angular.module('newsCtrl', ['ui.bootstrap']);
		angular.module('mediaCtrl', ['ui.bootstrap']);
		angular.module('donateCtrl', ['ui.bootstrap']);
		//
		angular.module('dataconfig', []);
    angular.module('directives', []);

    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router','directives', 'config','dataconfig','homeCtrl','headerCtrl','helpUsCtrl','ourStoryCtrl','contactCtrl','newsCtrl', 'mediaCtrl','donateCtrl']);

})();

(function(){
  'use strict';

  angular.module('config', [ 'ngMaterial' ]);

})();

(function(){
  'use strict';

  angular
    .module('dataconfig')
    .service('redInfo', [ 'redBagData', '$filter', function RedInfo(redBagData, $filter){
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
            var total = 0;
            for(var i=0; i < bags.length; i++)
              total += bags[i].delivered;
            return total;
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
            return $filter('orderBy')(news, "-date");
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
            var alltmpnews = $filter('orderBy')(news, "-date");
            return alltmpnews[0];
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
              return "http://www.facebook.com/1Reddbag";
              break;
            case 'ex.mail':
              return "mailto:1Reddbag@gmail.com";
              break;
            case 'ex.youtube':
              return "https://www.youtube.com/watch?v=raoNTII7JGM";
              break;
            case 'ex.twitter':
              return "https://twitter.com/1reddbag";
              break;
            case 'ex.linkedin':
              return "https://www.linkedin.com/";
              break;
            case 'ex.snapchat':
              return "https://www.snapchat.com/onereddbag";
              break;
            case 'ex.instagram':
              return "https://www.instagram.com/1reddbag/";
              break;
            default:
              return;
          }
        },
        media: {
          all: function() {
            return;
          },
          imgs: {
            all: function() {
              return redBagData.get_imgs().then(
                function(results) { return results; },
                function(error) { console.log("ERROR - No Results")}
              );
            },
            byFolder:function(folder) {
              return;
            },
            tst:function() {
              return {"folders":["test2"]};
            }
          },
          videos: {
            all: function() {
              return null;
            }
          }
        }
      }
    }])
    .factory("redBagData", ['$q', '$http', function($q, $http){
     function RedBagInfoData() {
       var vm = this;
       //TEST
       var date = new Date();
       var d = date.getDate();
       var m = date.getMonth();
       var y = date.getFullYear();

       /*Bag Dates*/
       vm.bag_date = [
         {"date":new Date("2015-10-11"), "delivered":1031}
       ];
       /*News Feed*/
       vm.newsfeed = [
         {"date":new Date("2016-06-24"), "title":"Website Release", "imgsrc":"img/newsimgs/News_site.png", "content":"The new One Redd Bag website has offically been released and is live.  This site will include all the information pertaining to the One Redd Bag group that is focused on feeding and providing motivation to the homeless and less fortionate of the Washington D.C. & Maryland area's.  Check here for news, general information, as well as calender updates for meet ups and trips involving our orginization.  Feel free to join our email lists to stay updated with our events, we aim to serve the community and help to build those that need it."},
         {"date":new Date("2016-07-11"), "title":"What Keeps Us Going", "imgsrc":"img/newsimgs/News_pop.jpg", "content":"During the summer months we implement Popsicle handing them out and cutting them for our friends. One day when we were in D.C I handed a Popsicle to a man what he said has been one of the reasons that I sacrifice soo much in order to help.  With tears in his eyes he said 'I haven’t had one of these since I was 17 years old…' He went on to tell me about his life, and how some unforeseen events have led to his current position, remaining hopeful I prayed with him to encourage him even further. This story reminds me that the people that we see on the street and in everyday passing are people just like we are. It’s our duty to remain humble, caring and persistent for some of our own personal dreams, while striving to use every single opportunity, job, degree and day that we get to help someone else."}

       ];
       /*Trips*/
       vm.trips_date = [{title:'D.C. meetup', start:new Date("2016-06-25 13:00:00"), end:new Date("2016-06-25 18:00:00"), allDay:false, location: "Washington D.C. Union Station"},{title:'D.C. meetup', start:new Date("2016-07-02 13:00:00"), end:new Date("2016-07-02 18:00:00"), allDay:false, location: "Washington D.C. Union Station"}];
       /*Stories*/
       vm.testimonies = [
          {"name":"Kristopher Redding","img":"", "story":"As a former student at the University of Delaware I have been apart of many young adult run orginizations but never before been apart of one that has such a hands on mindset.  I have watched this group grow from the vision of my brother and am proud to see the dedication and passion he has for this mission of serving his community."}
        ];

       //vm.folder_imgs = null;//{"folders":["test"]};

       vm.get_imgs = function() {
         var def = $q.defer();

         $http({ method: 'GET', url: "/imgapi/all/77"})
         .then(function successCallback(response) {
            def.resolve(response.data);
          }, function errorCallback(response) { def.reject(response); });

          return def.promise;
       }
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
      .state('app.news', {
        url: "news",
        views: {
          'content@': {
            templateUrl: 'views/news.html',
            controller: 'NewsController as nc'
          }
        }
      })
      .state('app.media', {
        url: "media",
        views: {
          'content@': {
            templateUrl: 'views/media.html',
            controller: 'MediaController as mc'
          }
        }
      })
      .state('app.donate', {
        url: "donate",
        views: {
          'content@': {
            templateUrl: 'views/donate.html',
            controller: 'DonateController as dc'
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
      $locationProvider.html5Mode(true);

    }]);


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
      {"id":"2", "type":"contact-link", "connectType":"youtube", "icon":"fa-youtube-play", "header":"YouTube", "linkText":"Watch Our Video", "url":"ex.youtube"},
      {"id":"3", "type":"contact-link", "connectType":"instagram", "icon":"fa-instagram", "header":"Instagram", "linkText":"Follow 1ReddBag", "url":"ex.instagram"},
      {"id":"4", "type":"contact-link", "connectType":"twitter", "icon":"fa-twitter-square", "header":"Twitter", "linkText":"Tweet At Us", "url":"ex.twitter"},
      {"id":"5", "type":"contact-link", "connectType":"linkedin", "icon":"fa-linkedin-square", "header":"Linkedin", "linkText":"Visit our Page", "url":"ex.linkedin"},
      {"id":"6", "type":"contact-link", "connectType":"snapchat", "icon":"fa-snapchat-square", "header":"SnapChat", "linkText":"Follow OneReddBag", "url":"ex.snapchat"}
    ];
    vm.externalUrlLink = function(external) {
      console.log(external);
      $window.open(redInfo.links(external), '_blank');
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('donateCtrl').controller('DonateController', ['$state', function($state){
    var vm = this;
    vm.title = "Donate";
    vm.mainImage = "img/donate.jpg";

    vm.donationAmounts = [ 10, 20, 40, 100, 300, 500, 650, 800, 1000];

    vm.DonationType = function(amount) {
        if(amount < 300)
          return 'basic';
        else {
          return 'sponsorship';
        }
    }

    vm.makeDonation = function(amount) {
      if(amount == '?') {
        console.log('$ OTHER');
        window.open('https://www.gofundme.com/1ReddBag/donate', '_blank');
      }
      else if(amount < 300){
        console.log('$' + amount + ' - normal');
        window.open('https://www.gofundme.com/1ReddBag/donate', '_blank');
      }
      else {
        console.log('$' + amount + ' - sponsor');
        window.open('https://www.gofundme.com/1ReddBag/donate', '_blank');
      }
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
        {"id":"0", "type":"mail-link", "icon":"fa-envelope", "header":"Join Email List", "link":"mailto:1Reddbag@gmail.com?subject=Join The Email List", "text":"Join our email list to get updates on our volenteering event schedule and general information on how you can help as well as join us."},
        {"id":"1", "type":"text-link", "icon":"fa-usd", "header":"Donate", "link":"app.construction", "text":"Visit our 'PayPal' page to donate to our mission, we are a nonprofit organization therefor all donations are tax deductable and go directly to mission by either paying for food or supplies."},
        {"id":"2", "type":"text-link", "icon":"fa-sign-language", "header":"Become A Sponsor", "link":"app.construction", "text":"Checkout our sponsorship packages and learn about how you or your business can become an official sponsor of our group and support our mission."}
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

    angular.module('homeCtrl').controller('HomeController', ['$state','redInfo',function($state, redInfo){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 5000;
      vm.active = 0;

      vm.slides = [
        {"id":0,"image":"img/t0.jpg","text":""},
        {"id":1,"image":"img/t1.jpg","text":""},
        {"id":2,"image":"img/t2.jpg","text":""},
        {"id":3,"image":"img/t3.jpg","text":""},
        {"id":4,"image":"img/t4.jpg","text":""}];

      vm.bagCount = redInfo.bags.count();
      vm.recentNews = redInfo.news.recent();
      vm.cards = [
        {"id":0, "type":"text-link", "icon":"fa-heartbeat", "header":"Our Mission", "text":"We structure our efforts to connect intimately with each and every life that we reach in order to leave a positive influence and provide access to much needed resources such as food, clothing, shelter and support.", "link":"app.ourstory"},
        {"id":1, "type":"text-link", "icon":"fa-users", "header":"How To Help", "text":"Learn ways that you can help us to accomplish our mission of feeding the homeless and less fortionate, these include volunteering, donating, and even becoming a sponsor.", "link":"app.helpus"},
        {"id":2, "type":"news-link", "icon":"fa-newspaper-o", "header":"News", "date":vm.recentNews.date, "text":(vm.recentNews.content.length > 90 ? vm.recentNews.content.substring(0,90) : vm.recentNews.content )+"...", "link":"app.news"}
      ];

    }]);

})();

(function(){
 "use strict";

  angular.module('mediaCtrl').controller('MediaController', ['$state', 'redInfo', '$filter', function($state, redInfo, $filter){
    var vm = this;
    vm.title = "Media";
    vm.mainImage = "img/";
    vm.media = undefined;
    vm.selectedFolderImages =[];
    vm.pageMedia = null;

    vm.getMedia = function() {
      redInfo.media.imgs.all().then(
        function(retResults) {
          vm.media = {"photos": retResults, "videos": redInfo.media.videos.all()};
          console.log(vm.media);
          vm.buildNavigation();
          // TEST
          //vm.getFolderImages("6-27-15");
         },
        function(error) { console.log("ERROR - No Results")}
      );
    }();

    vm.getFolderImages = function(folder) {
      vm.media.images
      .filter(function(image) { return (image.indexOf("media_imgs\\"+folder) > -1)})
      .forEach(function (image) { vm.selectedFolderImages.push(image.substring(image.lastIndexOf("\\") + 1, image.length)); });
    }

    vm.buildNavigation = function() {
      vm.activeNav = { "level":1, "items":[{"title":"photos"}, {"title":"videos"}]};
      vm.activeLevel = {"id":1, "parent":""};
    }

    vm.mediaNav = function(navItem) {
      var action = (navItem == "<<"? 0: 1);

      if(action == 0 && vm.activeLevel.id > 1)
      { vm.activeLevel.id -= 1; }
      else if(action == 1)
      { vm.activeLevel.id += 1; }

      if(vm.activeLevel.id < 2)
      {vm.buildNavigation();}
      else if(vm.activeLevel.id == 2)
      {
        vm.activeLevel.parent = navItem;
        vm.activeNav = { "level":2, "items":[{"title":"<<"}]};
        if(navItem == "photos"){
          if(vm.media.photos != null){
            for(var i =0; i < vm.media.photos.folders.length; i++){
              vm.activeNav.items.push( {"title":vm.media.photos.folders[i]} );
            }
          }
        }
        else{
          if(vm.media.videos != null){

          }
        }
      }
      else if(vm.activeLevel.id == 3)
      {
        vm.activeLevel.parent = navItem;
        vm.activeNav = { "level":3, "items":[{"title":"<<"}, {"title":navItem}]};
      }
      vm.changeMedia();
    }

    vm.getNavId = function(level) {
      return "lvl"+level;
    }

    vm.changeMedia = function() {
      if(vm.activeLevel.id == 1) {
        vm.pageMedia = null;
      }
      else if(vm.activeLevel.id == 2) {
          if(vm.activeLevel.parent == "photos" && vm.media.photos != null){
            vm.pageMedia = {"type":"folder", "content":[]};
            for(var i =0; i < vm.media.photos.folders.length; i++) {
              vm.pageMedia.content.push(vm.media.photos.folders[i]);
            }
          }
      }
      else if(vm.activeLevel.id == 3)
      {
        if(vm.media.photos.images != null)
        {
          vm.pageMedia = {"type":"photos", "content":[]};
          for(var i =0; i < vm.media.photos.images.length; i++) {
            if(vm.media.photos.images[i].indexOf(vm.activeLevel.parent > -1))
              vm.pageMedia.content.push(vm.media.photos.images[i]);
          }
        }
      }
      console.log(vm.pageMedia);
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('newsCtrl').controller('NewsController', ['$state', 'redInfo',function($state, redInfo){
    var vm = this;
    vm.title = "News";
    vm.mainImage = "img/news.jpg";

    vm.news = redInfo.news.all();
    vm.selectedItem = vm.news[0];

    vm.selectNews = function(item) {
      vm.selectedItem = item;
    }
    vm.isSelected = function(item){
      if((item.title == vm.selectedItem.title) && (item.date == vm.selectedItem.date))
        return 'selected';
      else {
        return '';
      }
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', '$sce', 'redInfo',function($state, $sce, redInfo){
    var vm = this;
    vm.title = "Our Story";
    vm.mainImage = "img/ourstory.jpg";
    vm.stories = redInfo.testimonies.all();

    vm.styleText = styleText;

    vm.tabs = [
      {"id":0, "title":"About One Red Bag", "type":"main-story", "img":"img/aboutorb.jpg", "contentTitle":"Our Story", "content":"{0}May 2015 I was on the way to a conference in Washington D.C, something that I saw would change my life forever and inspire me to take a step out on faith. While driving past a park I saw a man and a woman feeding the homeless out of the trunk of their car. They handed out bagels, and cups of juice to all that were near. This made me think of exactly what I could do to make a difference also.{1}{0}On May 22, 2015 I took a step out on faith: {1}{0}I loaded up a Red luggage bag with 30 bag lunches: each with a personalized note of encouragement, water bottle, snacks and sandwich and headed to Washington D.C to hand them out.  It took me 8 hours but I knew something great was started.  Following this weekend I asked a friend to join me, from here the rest is history. {1}{0}2015 was our pilot year, we were able to provide 1,031 meals to those in need. We have grown from a single red luggage bag and a dream to a registered 501c(3).  We spend our time rolling around Washington D.C, Maryland & Virginia looking for the people many people overlook.  It not only brings tears to my eyes but there’s too when they see that someone cares for them.{1}{0}We hope that this story inspires you to get involved in whatever way possible.{1}{0}Thank you for your time.{1}"},
      {"id":1, "title":"What We Do", "type":"story-timeline","stories":[{"title":"Building", "img":"fa-truck","content":"By meeting together to organize as well as hand make every bagged lunch that we hand out we aim to build and environment where we can create a healthy meal for those we reach."},{"title":"Encouraging", "img":"fa-thumbs-o-up","content":"Each bag includes a note that was personally written by the founder to provide an encouraging word those that are less fortionate.  This note is ment to let them know that they always have the power of Jesus with them and there are better days ahead."},{"title":"Reaching Out", "img":"img/Logo_bw.png","content":"We personally walk through the cities that we visit and hand these bags out so that we can provide a personal connection with those we meet and give them a face behind the bag as well as a kind word or quick prayer."}]},
      {"id":2, "title":"Volenteer Stories", "type":"member-stories", "stories": redInfo.testimonies.all() }
    ];

    function styleText(content){
      //var tmp = content.replace("{0}", "<p>").replace("{1}", "</p>");
      var tmp1 = content.split("{0}").join("<p>");
      var tmp2 = tmp1.split("{1}").join("</p>");

      return($sce.trustAsHtml(tmp2));
    }

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
