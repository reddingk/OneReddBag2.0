(function(){
 "use strict";

  angular.module('contactCtrl').controller('ContactController', ['$state','redInfo','$window', function($state, redInfo, $window){
    var vm = this;
    vm.title = "Help Us";
    vm.mainImage = "img/page_imgs/contactus.jpg";

    /*Cards*/
    vm.cards = [
      {"id":"0", "type":"contact-link", "connectType":"email", "icon":"fa-envelope", "header":"Email", "linkText":"1Reddbag@gmail.com", "url":"ex.mail"},
      {"id":"1", "type":"contact-link", "connectType":"facebook", "icon":"fa-facebook-square", "header":"Facebook", "linkText":"Visit Out Page", "url":"ex.facebook"},
      {"id":"2", "type":"contact-link", "connectType":"youtube", "icon":"fa-youtube-play", "header":"YouTube", "linkText":"Watch Our Video", "url":"ex.youtube"},
      {"id":"3", "type":"contact-link", "connectType":"instagram", "icon":"fa-instagram", "header":"Instagram", "linkText":"Follow 1ReddBag", "url":"ex.instagram"},
      {"id":"4", "type":"contact-link", "connectType":"twitter", "icon":"fa-twitter-square", "header":"Twitter", "linkText":"Tweet At Us", "url":"ex.twitter"},
      {"id":"5", "type":"contact-link", "connectType":"linkedin", "icon":"fa-linkedin-square", "header":"Linkedin", "linkText":"Visit our Page", "url":"ex.linkedin"},
      {"id":"6", "type":"contact-link", "connectType":"snapchat", "icon":"fa-snapchat-square", "header":"SnapChat", "linkText":"Follow OneReddBag", "url":"ex.snapchat"},
      {"id":"7", "type":"contact-link", "connectType":"periscope", "icon":"fa-map-marker", "header":"Periscope", "linkText":"Follow 1ReddBag", "url":"ex.periscope"}
    ];
    vm.externalUrlLink = function(external) {
      console.log(external);
      $window.open(redInfo.links(external), '_blank');
    }

  }]);

})();
