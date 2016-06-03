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

       /*Bag Dates*/
       vm.bag_date = [
         {"date":new Date("2015-10-11"), "delivered":1031}
       ];
       /*News Feed*/
       vm.newsfeed = [
         {"date":new Date("2016-06-24"), "title":"Website Release", "content":"The new One Redd Bag website has offically been released and is live.  This site will include all the information pertaining to the One Redd Bag group that is focused on feeding and providing motivation to the homeless and less fortionate of the Washington D.C. & Maryland area's.  Check here for news, general information, as well as calender updates for meet ups and trips involving our orginization.  Feel free to join our email lists to stay updated with our events, we aim to serve the community and help to build those that need it."},
         {"date":new Date("2015-07-01"), "title":"TEST News", "content":"Test News - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
         {"date":new Date("2016-04-11"), "title":"TEST News 2", "content":"Test News2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
         {"date":new Date("2016-05-15"), "title":"TEST News 3", "content":"Test News3 - Short"}
       ];
       /*Trips*/
       vm.trips_date = [{title:'D.C. meetup', start:new Date("2016-06-25 13:00:00"), end:new Date("2016-06-25 18:00:00"), allDay:false, location: "Washington D.C. Union Station"},{title:'D.C. meetup', start:new Date("2016-07-02 13:00:00"), end:new Date("2016-07-02 18:00:00"), allDay:false, location: "Washington D.C. Union Station"}];
       /*Stories*/
       vm.testimonies = [
          {"name":"Kristopher Redding","img":"", "story":"As a former student at the University of Delaware I have been apart of many young adult run orginizations but never before been apart of one that has such a hands on mindset.  I have watched this group grow from the vision of my brother and am proud to see the dedication and passion he has for this mission of serving his community."},
          {"name":"Test Wilson","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
          {"name":"Test Star","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."},
          {"name":"Test Johnson","img":"", "story":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."}];
     }

     return new RedBagInfoData();
    }]);

})();
