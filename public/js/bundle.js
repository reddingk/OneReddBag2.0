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
            case 'ex.periscope':
              return "https://www.periscope.tv/1reddbag";
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
              return redBagData.getImgsFolder(folder).then(
                function(results) { return results; },
                function(error) { console.log("ERROR - No Results")}
              );
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
         {"date":new Date("2015-10-11 00:00:00"), "delivered":1031},{"date":new Date("2016-07-17 00:00:00"), "delivered":200},{"date":new Date("2016-07-31 00:00:00"), "delivered":200},{"date":new Date("2016-08-21 00:00:00"), "delivered":200},{"date":new Date("2016-09-25 00:00:00"), "delivered":180},{"date":new Date("2016-12-11 00:00:00"), "delivered":200}
       ];
       /*News Feed*/
       vm.newsfeed = [
         {"date":new Date("2016-07-14 00:00:00"), "title":"Website Release", "imgsrc":"img/newsimgs/News_site.png", "content":"The new One Redd Bag website has offically been released and is live.  This site will include all the information pertaining to the One Redd Bag group that is focused on feeding and providing motivation to the homeless and less fortionate of the Washington D.C. & Maryland area's.  Check here for news, general information, as well as calender updates for meet ups and trips involving our orginization.  Feel free to join our email lists to stay updated with our events, we aim to serve the community and help to build those that need it."},
         {"date":new Date("2016-07-15 00:00:00"), "title":"What Keeps Us Going", "imgsrc":"img/newsimgs/News_pop.jpg", "content":"During the summer months we implement Popsicle handing them out and cutting them for our friends. One day when we were in D.C I handed a Popsicle to a man what he said has been one of the reasons that I sacrifice soo much in order to help.  With tears in his eyes he said 'I haven’t had one of these since I was 17 years old…' He went on to tell me about his life, and how some unforeseen events have led to his current position, remaining hopeful I prayed with him to encourage him even further. This story reminds me that the people that we see on the street and in everyday passing are people just like we are. It’s our duty to remain humble, caring and persistent for some of our own personal dreams, while striving to use every single opportunity, job, degree and day that we get to help someone else."},
         {"date":new Date("2016-11-04 00:00:00"), "title":"1 Redd Bag Clothing Drive", "imgsrc":"img/newsimgs/Clothing_Drive.png", "content":"Bring your donations of lightly used Coats, Hats, Gloves and Clothing for Men Women Or Children! All donations support Central Union Mission providing food, counseling and shelter for over 100 men in need! Help Us Reach our goal of 1,000 Coats! Please Contact 1ReddBag@gmail.com to donate."}

       ];
       /*Trips*/
       vm.trips_date = [{title:'D.C. meetup', start:new Date("2016-07-17 13:00:00"), end:new Date("2016-07-17 18:00:00"), allDay:false, location: "Washington D.C."},
                    {title:'D.C. meetup', start:new Date("2016-07-31 14:00:00"), end:new Date("2016-07-31 18:00:00"), allDay:false, location: "Washington D.C."},
                    {title:'D.C. meetup', start:new Date("2016-08-21 15:00:00"), end:new Date("2016-08-21 18:00:00"), allDay:false, location: "Washington D.C."},
                    {title:'D.C. meetup', start:new Date("2016-09-25 15:00:00"), end:new Date("2016-09-25 18:00:00"), allDay:false, location: "Washington D.C."},
                    {title:'MLK Day of Service', start:new Date("2017-01-16 08:30:00"), end:new Date("2017-01-16 13:00:00"), allDay:false, location: "Honda Civic Center, Silver Spring, Md."}
                  ];
       /*Stories*/
       vm.testimonies = [
          {"name":"Kristopher Redding","img":"", "story":"As a former student at the University of Delaware I have been apart of many young adult run orginizations but never before been apart of one that has such a hands on mindset.  I have watched this group grow from the vision of my brother and am proud to see the dedication and passion he has for this mission of serving his community."}
        ];

       vm.get_imgs = function() {
         var def = $q.defer();

         $http({ method: 'GET', url: "/imgapi/all/77"})
         .then(function successCallback(response) {
            def.resolve(response.data);
          }, function errorCallback(response) { def.reject(response); });

          return def.promise;
       }
       vm.getImgsFolder = function(folder) {
         var def = $q.defer();

         $http({ method: 'GET', url: "/imgapi/folder/"+folder})
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
            templateUrl: 'views/wait.html'
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
    vm.mainImage = "img/page_imgs/contactus.jpg";

    /*Cards*/
    vm.cards = [
      {"id":"0", "type":"contact-link", "connectType":"email", "icon":"fa-envelope", "header":"Email", "linkText":"1Reddbag@gmail.com", "url":"ex.mail"},
      {"id":"1", "type":"contact-link", "connectType":"facebook", "icon":"fa-facebook-square", "header":"Facebook", "linkText":"Visit Out Page", "url":"ex.facebook"},
      {"id":"2", "type":"contact-link", "connectType":"youtube", "icon":"fa-youtube-play", "header":"YouTube", "linkText":"Watch Our Video", "url":"ex.youtube"},
      {"id":"3", "type":"contact-link", "connectType":"instagram", "icon":"fa-instagram", "header":"Instagram", "linkText":"Follow 1ReddBag", "url":"ex.instagram"},
      {"id":"4", "type":"contact-link", "connectType":"twitter", "icon":"fa-twitter-square", "header":"Twitter", "linkText":"Tweet At Us", "url":"ex.twitter"},
      {"id":"5", "type":"contact-link", "connectType":"linkedin", "icon":"fa-linkedin-square", "header":"Linkedin", "linkText":"Visit our Page", "url":"ex.linkedin"},
      {"id":"6", "type":"contact-link", "connectType":"snapchat", "icon":"fa-snapchat-square", "header":"SnapChat", "linkText":"Follow OneReddBag", "url":"ex.snapchat"},
      {"id":"7", "type":"contact-link", "connectType":"periscope", "icon":"fa-map-marker", "header":"Periscope", "linkText":"Follow 1ReddBag", "url":"ex.periscope"}
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
    vm.mainImage = "img/page_imgs/donate.jpg";

    //vm.donationAmounts = [ 10, 20, 40, 100, 300, 500, 650, 800, 1000];
    vm.donationDayAmounts = [ 10, 20, 40, 100, 200];
    vm.donationSeasonAmounts = [ 500, 650, 800, 1000];

    vm.DonationType = function(amount) {
        if(amount < 400)
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
      var navMain = $("#orb-inside-nav");
      navMain.on("click", ".link", null, function () {
         navMain.collapse('hide');
       });

    }]);

})();

(function(){
   "use strict";

    angular.module('helpUsCtrl').controller('HelpUsController', ['$state','redInfo', function($state, redInfo){
      //uiCalendarConfig
      var vm = this;
      vm.title = "Help Us";
      vm.mainImage = "img/page_imgs/helpus.jpg";
      vm.trips = redInfo.trips.all();
      vm.newFewTrips = redInfo.trips.nextFew();
      vm.selectedTrip = null;

      /*Cards*/
      vm.cards = [
        {"id":"0", "type":"mail-link", "specialid":"","icon":"fa-envelope", "header":"Join Email List", "link":"mailto:1Reddbag@gmail.com?subject=Join The Email List", "text":"Join our email list to get updates on our volenteering event schedule and general information on how you can help as well as join us."},
        {"id":"1", "type":"text-link", "specialid":"emphasize", "icon":"fa-usd", "header":"Donate", "link":"app.donate", "text":"Visit our 'PayPal' page to donate to our mission, we are a nonprofit organization therefor all donations are tax deductable and go directly to mission by either paying for food or supplies."},
        {"id":"2", "type":"text-link", "specialid":"","icon":"fa-sign-language", "header":"Become A Sponsor", "link":"app.construction", "text":"Checkout our sponsorship packages and learn about how you or your business can become an official sponsor of our group and support our mission."}
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
      vm.myInterval = 7000;
      vm.active = 0;

      vm.slides = [
        {"id":0,"image":"img/page_imgs/t0.jpg","text":""},
        {"id":1,"image":"img/page_imgs/t1.jpg","text":""},
        {"id":2,"image":"img/page_imgs/t7.jpg","text":""},
        {"id":3,"image":"img/page_imgs/t4.jpg","text":""},
        {"id":4,"image":"img/page_imgs/t6.jpg","text":""}];

      vm.recentMedia = {"type":"video", "media":"videos/MOV_4664.3gp", "title":"Holiday Food Drive", "text":"Hear a word from our president about our holiday work with Central Union Mission.  We will be feeding those in need Saturday December 10th 4:30pm - 6:30pm, to learn how you can help us please contact us at 1ReddBag@gmail.com.  Have a wonderful and blessed holiday season."};

      vm.bagCount = redInfo.bags.count();
      vm.recentNews = redInfo.news.recent();
      vm.cards = [
        {"id":0, "type":"text-link", "icon":"fa-heartbeat", "image":"img/page_imgs/c1.jpg", "header":"Our Mission", "text":"We structure our efforts to connect intimately with each and every life that we reach in order to leave a positive influence and provide access to much needed resources such as food, clothing, shelter and support.", "link":"app.ourstory"},
        {"id":1, "type":"text-link", "icon":"fa-users", "image":"img/page_imgs/c2.jpg", "header":"How To Help", "text":"Learn ways that you can help us to accomplish our mission of feeding the homeless and less fortionate, these include volunteering, donating, and even becoming a sponsor.", "link":"app.helpus"},
        {"id":2, "type":"news-link", "icon":"fa-newspaper-o", "image":"img/page_imgs/c3.jpg", "header":"News", "title":vm.recentNews.title,"date":vm.recentNews.date, "text":(vm.recentNews.content.length > 90 ? vm.recentNews.content.substring(0,90) : vm.recentNews.content )+"...", "link":"app.news"}
      ];

      function getMedia() {
        redInfo.media.imgs.byFolder('12-10-16').then(
          function(retResults) {
            vm.recentEventMedia = {"photos": retResults};
            console.log(vm.recentEventMedia);
           },
          function(error) { console.log("ERROR - No Results")}
        );
      }

      // fire function
      getMedia();

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
      vm.activeLevel = {"id":1, "parent":"", "title":""};
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
        vm.activeNav = { "level":2, "items":[{"title":"<<"}]};
        if(vm.activeLevel.parent == "photos" || navItem == "photos"){
          vm.activeLevel.parent = "photos";
          vm.activeLevel.title = "photos";
          if(vm.media.photos != null){
            for(var i =0; i < vm.media.photos.folders.length; i++){
              vm.activeNav.items.push( {"title":vm.media.photos.folders[i]} );
            }
          }
        }
        else{
          vm.activeLevel.parent = "videos";
          vm.activeLevel.title = "videos";
          vm.activeNav.items.push( {"title":"Videos", "noLink":1} );
          if(vm.media.videos != null){ }
        }
      }
      else if(vm.activeLevel.id == 3)
      {
        vm.activeLevel.title = navItem;
        vm.activeNav = { "level":3, "items":[{"title":"<<"}, {"title":navItem, "noLink":1}]};
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
          if(vm.activeLevel.title == "photos" && vm.media.photos != null){
            vm.pageMedia = {"type":"folders", "content":[]};
            for(var i =0; i < vm.media.photos.folders.length; i++) {
              vm.pageMedia.content.push(vm.media.photos.folders[i]);
            }
          }
          else if(vm.activeLevel.title == "videos"){
              vm.pageMedia = {"type":"videos", "content":[]};
          }
      }
      else if(vm.activeLevel.id == 3)
      {
        if(vm.media.photos.images != null)
        {
          vm.pageMedia = {"type":"photos", "content":[], "displayedContent":[], "displayedcount":9};
          for(var i =0; i < vm.media.photos.images.length; i++) {
            if(vm.media.photos.images[i].indexOf(vm.activeLevel.title) > -1){
              var imgLoc = vm.media.photos.images[i];
              vm.pageMedia.content.push(imgLoc.substring(imgLoc.indexOf("img")));
              if(vm.pageMedia.displayedContent.length < 9)
                {vm.pageMedia.displayedContent.push(imgLoc.substring(imgLoc.indexOf("img")));}
            }
          }
        }
      }
      //console.log(vm.pageMedia);
    }

    vm.loadImgs = function() {
      var oldCount = vm.pageMedia.displayedcount;
      var newCount = (vm.pageMedia.content.length < (oldCount + 9) ? vm.pageMedia.content.length : (oldCount + 9))
      vm.pageMedia.displayedcount = newCount;

      //console.log("| content " + vm.pageMedia.content.length +" | old "+ oldCount + " | new " + newCount)

      for(var i = oldCount; i < newCount; i++) {
        vm.pageMedia.displayedContent.push(vm.pageMedia.content[i]);
      }
    }
    vm.styleFolder = function(title){
      return title.split("-").join(".");
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('newsCtrl').controller('NewsController', ['$state', 'redInfo',function($state, redInfo){
    var vm = this;
    vm.title = "News";
    vm.mainImage = "img/page_imgs/news.jpg";

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
    vm.mainImage = "img/page_imgs/ourstory.jpg";
    vm.stories = redInfo.testimonies.all();

    vm.styleText = styleText;

    vm.tabs = [
      {"id":0, "title":"About One Red Bag", "type":"main-story", "img":"img/page_imgs/aboutorb.jpg", "contentTitle":"Our Story", "content":"{0}May 2015 I was on the way to a conference in Washington D.C, something that I saw would change my life forever and inspire me to take a step out on faith. While driving past a park I saw a man and a woman feeding the homeless out of the trunk of their car. They handed out bagels, and cups of juice to all that were near. This made me think of exactly what I could do to make a difference also.{1}{0}On May 22, 2015 I took a step out on faith: {1}{0}I loaded up a Red luggage bag with 30 bag lunches: each with a personalized note of encouragement, water bottle, snacks and sandwich and headed to Washington D.C to hand them out.  It took me 8 hours but I knew something great was started.  Following this weekend I asked a friend to join me, from here the rest is history. {1}{0}2015 was our pilot year, we were able to provide 1,031 meals to those in need. We have grown from a single red luggage bag and a dream to a registered 501c(3).  We spend our time rolling around Washington D.C, Maryland & Virginia looking for the people many people overlook.  It not only brings tears to my eyes but there’s too when they see that someone cares for them.{1}{0}We hope that this story inspires you to get involved in whatever way possible.{1}{0}Thank you for your time.{1}"},
      {"id":1, "title":"What We Do", "type":"story-timeline","stories":[{"title":"Building", "img":"fa-truck","content":"By meeting together to organize as well as hand make every bagged lunch that we hand out we aim to build and environment where we can create a healthy meal for those we reach."},{"title":"Encouraging", "img":"fa-thumbs-o-up","content":"Each bag includes a note that was personally written by the founder to provide an encouraging word those that are less fortionate.  This note is ment to let them know that they always have the power of Jesus with them and there are better days ahead."},{"title":"Reaching Out", "img":"img/Logo_bw.png","content":"We personally walk through the cities that we visit and hand these bags out so that we can provide a personal connection with those we meet and give them a face behind the bag as well as a kind word or quick prayer."}]},
      {"id":2, "title":"Volenteer Stories", "type":"member-stories", "stories": redInfo.testimonies.all() }
    ];

    function styleText(content){
      var tmp1 = content.split("{0}").join("<p>");
      var tmp2 = tmp1.split("{1}").join("</p>");

      return($sce.trustAsHtml(tmp2));
    }

  }]);

})();

(function(){
   "use strict";

    angular.module('directives').directive('backImg', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {
          var url = attrs.backImg;
          element.css({'background-image': 'url(' + url +')'});
        }
      }

    }]);

})();

(function(){
   "use strict";

    angular.module('directives').directive('isVisible', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          // get element position
          var elementPos = (attrs.voffset == undefined ? 0 : parseInt(attrs.voffset,10 ));
          var el = element[0];
          while(el.offsetParent){
            el = el.offsetParent;
            elementPos += el.offsetTop;
          }
          angular.element($window).bind("scroll", function() {
            var windowp = angular.element($window)[0];

            if((windowp.pageYOffset >= elementPos) && !element.hasClass("screenVisible")){
              element.addClass("screenVisible");
            }
            else {
              if(element.hasClass("screenVisible")){
                //element.removeClass("screenVisible");
              }
            }

          });
        }
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
            var topThreshhold = 50;

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

(function(){
   "use strict";

    angular.module('directives').directive('randomMotion', ['$timeout', function($timeout) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {
          console.log("Start Motion");
          var parentContainer = element[0].offsetParent;

          // Randomly Set Postion & Velocity
          var maxVelocity = 150;
          var posX = (Math.random() * parentContainer.clientWidth);//Math.min(0, Math.max(20, (Math.random() * 0)));
          var posY = (Math.random() * parentContainer.clientHeight);//Math.min(0, Math.max(20, (Math.random() * 10)));
          var velX = (Math.random() * maxVelocity);
          var velY = (Math.random() * maxVelocity);
          var timestamp = null;



          // Move Object
          (function tick() {
            var now = new Date().getTime();
            var borderX = 250; //parentContainer.clientWidth *.05;
            var borderY = 250; //parentContainer.clientHeight *.20;

            var maxX = parentContainer.clientWidth - borderX;
            var maxY = parentContainer.clientHeight - borderY;

            var elapsed = (timestamp || now) - now;
            timestamp = now;
            posX += elapsed * velX / 1000;
            posY += elapsed * velY / 1000;

            if (posX > maxX) {
                posX = 2 * maxX - posX;
                velX *= -1;
            }
            if (posX < -60) {
                posX = -60;
                velX *= -1;
            }
            if (posY > maxY) {
                posY = 2 * maxY - posY;
                velY *= -1;
            }
            if (posY < -60) {
                posY = -60;
                velY *= -1;
            }
            element.css({ "top": posY, "left": posX });
            // Set Position to $element top and left
            // Loop to Move object
            $timeout(tick, 30);
          })();
        }
      }
    }]);

})();
