(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state',function($state){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 5000;
      //vm.active = 1;
      //vm.noWrapSlides = false;

      vm.slides = [
        {"id":"0","image":"img/t0.jpg","text":""},
        {"id":"1","image":"img/t1.jpg","text":""},
        {"id":"2","image":"img/t2.jpg","text":""},
        {"id":"3","image":"img/t3.jpg","text":""},
        {"id":"4","image":"img/t4.jpg","text":""}];

      vm.cards = [
        {"id":"0", "type":"text-link", "icon":"fa-heartbeat", "header":"Our Mission", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"id":"1", "type":"text-link", "icon":"fa-users", "header":"How To Help", "text":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"id":"2", "type":"news-link", "icon":"fa-newspaper-o", "header":"News", "date":"2016-05-20", "text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];
    }]);

})();
