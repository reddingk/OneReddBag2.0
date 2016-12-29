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
     }

     return new RedBagInfoData();
    }]);

})();
