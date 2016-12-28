(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state','redInfo',function($state, redInfo){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 7000;
      vm.active = 0;

      vm.slides = [
        {"id":0,"image":"img/page_imgs/t0.jpg","text":""},
        {"id":1,"image":"img/page_imgs/t1.jpg","text":""},
        {"id":2,"image":"img/page_imgs/t7.jpg","text":""},
        {"id":3,"image":"img/page_imgs/t4.jpg","text":""},
        {"id":4,"image":"img/page_imgs/t6.jpg","text":""}];

      vm.recentMedia = {"type":"video", "media":"videos/MOV_4664.3gp", "title":"Holiday Food Drive", "text":"Hear a word from our president about our holiday work with Central Union Mission.  We will be feeding those in need Saturday December 10th 4:30pm - 6:30pm, to learn how you can help us please contact us at 1ReddBag@gmail.com.  Have a wonderful and blessed holiday season."};

      vm.bagCount = redInfo.bags.count();
      vm.recentNews = redInfo.news.recent();
      vm.cards = [
        {"id":0, "type":"text-link", "icon":"fa-heartbeat", "image":"img/page_imgs/c1.jpg", "header":"Our Mission", "text":"We structure our efforts to connect intimately with each and every life that we reach in order to leave a positive influence and provide access to much needed resources such as food, clothing, shelter and support.", "link":"app.ourstory"},
        {"id":1, "type":"text-link", "icon":"fa-users", "image":"img/page_imgs/c2.jpg", "header":"How To Help", "text":"Learn ways that you can help us to accomplish our mission of feeding the homeless and less fortionate, these include volunteering, donating, and even becoming a sponsor.", "link":"app.helpus"},
        {"id":2, "type":"news-link", "icon":"fa-newspaper-o", "image":"img/page_imgs/c3.jpg", "header":"News", "title":vm.recentNews.title,"date":vm.recentNews.date, "text":(vm.recentNews.content.length > 90 ? vm.recentNews.content.substring(0,90) : vm.recentNews.content )+"...", "link":"app.news"}
      ];

    }]);

})();
