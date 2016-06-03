(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', 'redInfo',function($state,redInfo){
    var vm = this;
    vm.title = "Our Story";
    vm.mainImage = "img/ourstory.jpg";
    vm.stories = redInfo.testimonies.all();

    vm.tabs = [
      {"id":0, "title":"About One Red Bag", "type":"main-story", "img":"img/aboutorb.jpg", "contentTitle":"Our Story", "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},
      {"id":1, "title":"What We Do", "type":"story-timeline","stories":[{"title":"Building", "img":"fa-truck","content":"By meeting together to organize as well as hand make every bagged lunch that we hand out we aim to build and environment where we can create a healthy meal for those we reach."},{"title":"Encouraging", "img":"fa-thumbs-o-up","content":"Each bag includes a note that was personally written by the founder to provide an encouraging word those that are less fortionate.  This note is ment to let them know that they always have the power of Jesus with them and there are better days ahead."},{"title":"Reaching Out", "img":"img/Logo_bw.png","content":"We personally walk through the cities that we visit and hand these bags out so that we can provide a personal connection with those we meet and give them a face behind the bag as well as a kind word or quick prayer."}]},
      {"id":2, "title":"Volenteer Stories", "type":"member-stories", "stories": redInfo.testimonies.all() }
    ];

  }]);

})();
