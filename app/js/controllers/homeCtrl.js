(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state','redInfo', function($state, redInfo){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 5000;
      //vm.active;

      vm.slides = [
        {"id":"0","image":"img/t0.jpg","text":""},
        {"id":"1","image":"img/t1.jpg","text":""},
        {"id":"2","image":"img/t2.jpg","text":""},
        {"id":"3","image":"img/t3.jpg","text":""},
        {"id":"4","image":"img/t4.jpg","text":""}];

      vm.bagCount = redInfo.bags.count();
      vm.recentNews = redInfo.news.recent();
      vm.cards = [
        {"id":"0", "type":"text-link", "icon":"fa-heartbeat", "header":"Our Mission", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link":"app.ourstory"},
        {"id":"1", "type":"text-link", "icon":"fa-users", "header":"How To Help", "text":"Learn ways that you can help us to accomplish our mission of feeding the homeless and less fortionate, these include volunteering, donating, and even becoming a sponsor.", "link":"app.helpus"},
        {"id":"2", "type":"news-link", "icon":"fa-newspaper-o", "header":"News", "date":vm.recentNews.date, "text":(vm.recentNews.content.length > 90 ? vm.recentNews.content.substring(0,90) : vm.recentNews.content )+"...", "link":"app.news"}
      ];

    }]);

})();
