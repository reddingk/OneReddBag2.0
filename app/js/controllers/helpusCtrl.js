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
