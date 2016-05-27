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
          }
        }
      }
    }])
    .factory("redBagData", ['$q', function($q){
     function RedBagInfoData() {
       var vm = this;
       vm.bag_date = [{"date":"2015-07-01", "delivered":52}];
       vm.newsfeed = [{"date":"2016-06-24", "title":"Website Release", "content":"The Website is now live"}, {"date":"2015-07-01", "title":"TEST", "content":"Test News"}];
       vm.trips_date = [{"title":"D.C. meetup", "start":new Date(2016, 6, 25, 13, 0), "end":new Date(2016, 6, 25, 18, 0), "allDay":false, "location":"Washington D.C. Union Station"}];
     }

     return new RedBagInfoData();
    }]);

})();
