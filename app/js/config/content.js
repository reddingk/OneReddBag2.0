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
