(function(){
   "use strict";

    angular.module('helpUsCtrl').controller('HelpUsController', ['$state','redInfo', function($state, redInfo){
      //uiCalendarConfig
      var vm = this;
      vm.title = "Help Us";
      vm.mainImage = "img/helpus.jpg";

      vm.trips = redInfo.trips.all();

      /*Calender*/
      vm.uiConfig = {
        "calendar":{
          "height": 450,
          "editable": true,
          "header":{
            "left": "title", "center": '', "right": 'today prev, next'
          }
        }
      };

      vm.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event', currentTimezone: 'America/Washington DC' // an option!
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
