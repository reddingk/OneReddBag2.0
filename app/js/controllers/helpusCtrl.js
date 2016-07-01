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
