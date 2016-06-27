(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', '$sce', 'redInfo',function($state, $sce, redInfo){
    var vm = this;
    vm.title = "Our Story";
    vm.mainImage = "img/ourstory.jpg";
    vm.stories = redInfo.testimonies.all();

    vm.styleText = styleText;

    vm.tabs = [
      {"id":0, "title":"About One Red Bag", "type":"main-story", "img":"img/aboutorb.jpg", "contentTitle":"Our Story", "content":"{0}May 2015 I was on the way to a conference in Washington D.C, something that I saw would change my life forever and inspire me to take a step out on faith. While driving past a park I saw a man and a woman feeding the homeless out of the trunk of their car. They handed out bagels, and cups of juice to all that were near. This made me think of exactly what I could do to make a difference also.{1}{0}On May 22, 2015 I took a step out on faith: {1}{0}I loaded up a Red luggage bag with 30 bag lunches: each with a personalized note of encouragement, water bottle, snacks and sandwich and headed to Washington D.C to hand them out.  It took me 8 hours but I knew something great was started.  Following this weekend I asked a friend to join me, from here the rest is history. {1}{0}2015 was our pilot year, we were able to provide 1,031 meals to those in need. We have grown from a single red luggage bag and a dream to a registered 501c(3).  We spend our time rolling around Washington D.C, Maryland & Virginia looking for the people many people overlook.  It not only brings tears to my eyes but there’s too when they see that someone cares for them.{1}{0}We hope that this story inspires you to get involved in whatever way possible.{1}{0}Thank you for your time.{1}"},
      {"id":1, "title":"What We Do", "type":"story-timeline","stories":[{"title":"Building", "img":"fa-truck","content":"By meeting together to organize as well as hand make every bagged lunch that we hand out we aim to build and environment where we can create a healthy meal for those we reach."},{"title":"Encouraging", "img":"fa-thumbs-o-up","content":"Each bag includes a note that was personally written by the founder to provide an encouraging word those that are less fortionate.  This note is ment to let them know that they always have the power of Jesus with them and there are better days ahead."},{"title":"Reaching Out", "img":"img/Logo_bw.png","content":"We personally walk through the cities that we visit and hand these bags out so that we can provide a personal connection with those we meet and give them a face behind the bag as well as a kind word or quick prayer."}]},
      {"id":2, "title":"Volenteer Stories", "type":"member-stories", "stories": redInfo.testimonies.all() }
    ];

    function styleText(content){
      //var tmp = content.replace("{0}", "<p>").replace("{1}", "</p>");
      var tmp1 = content.split("{0}").join("<p>");
      var tmp2 = tmp1.split("{1}").join("</p>");

      return($sce.trustAsHtml(tmp2));
    }

  }]);

})();
