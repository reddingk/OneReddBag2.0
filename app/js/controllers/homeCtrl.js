(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state','redInfo',function($state, redInfo){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 5000;
      vm.active = 0;

      vm.slides = [
        {"id":0,"image":"img/page_imgs/t0.jpg","text":""},
        {"id":1,"image":"img/page_imgs/t1.jpg","text":""},
        {"id":2,"image":"img/page_imgs/t2.jpg","text":""},
        {"id":3,"image":"img/page_imgs/t3.jpg","text":""},
        {"id":4,"image":"img/page_imgs/t4.jpg","text":""},
        {"id":5,"image":"img/page_imgs/t5.jpg","text":""}];

      vm.recentMedia = {"type":"video", "media":"videos/MOV_4664.3gp", "title":"", "text":""};

      vm.bagCount = redInfo.bags.count();
      vm.recentNews = redInfo.news.recent();
      vm.cards = [
        {"id":0, "type":"text-link", "icon":"fa-heartbeat", "header":"Our Mission", "text":"We structure our efforts to connect intimately with each and every life that we reach in order to leave a positive influence and provide access to much needed resources such as food, clothing, shelter and support.", "link":"app.ourstory"},
        {"id":1, "type":"text-link", "icon":"fa-users", "header":"How To Help", "text":"Learn ways that you can help us to accomplish our mission of feeding the homeless and less fortionate, these include volunteering, donating, and even becoming a sponsor.", "link":"app.helpus"},
        {"id":2, "type":"news-link", "icon":"fa-newspaper-o", "header":"News", "title":vm.recentNews.title,"date":vm.recentNews.date, "text":(vm.recentNews.content.length > 90 ? vm.recentNews.content.substring(0,90) : vm.recentNews.content )+"...", "link":"app.news"}
      ];

    }]);

})();
