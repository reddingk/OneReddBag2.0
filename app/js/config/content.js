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
