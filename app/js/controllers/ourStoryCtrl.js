(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', 'redInfo',function($state,redInfo){
    var vm = this;
    vm.title = "Our Story";
    vm.mainImage = "img/ourstory.jpg";
    vm.stories = redInfo.testimonies.all();

    vm.tabs = [
      {"id":0, "title":"About One Red Bag", "type":"main-story", "img":"img/aboutorb.jpg", "contentTitle":"Our Story", "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},
      {"id":1, "title":"What We Do", "type":"story-timeline","stories":[{"title":"Building", "img":"fa-truck","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Encouraging", "img":"fa-thumbs-o-up","content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."},{"title":"Reaching Out", "img":"img/Logo.png","content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}]},
      {"id":2, "title":"Volenteer Stories", "type":"member-stories", "stories": redInfo.testimonies.all() }
    ];

  }]);

})();
