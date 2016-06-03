(function(){
 "use strict";

  angular.module('contactCtrl').controller('ContactController', ['$state','redInfo','$window', function($state, redInfo, $window){
    var vm = this;
    vm.title = "Help Us";
    vm.mainImage = "img/contactus.jpg";

    /*Cards*/
    vm.cards = [
      {"id":"0", "type":"contact-link", "connectType":"email", "icon":"fa-envelope", "header":"Email", "linkText":"Message 1Reddbag@gmail.com", "url":"ex.mail"},
      {"id":"1", "type":"contact-link", "connectType":"facebook", "icon":"fa-facebook-square", "header":"Facebook", "linkText":"Visit Out Page", "url":"ex.facebook"},
      {"id":"2", "type":"contact-link", "connectType":"youtube", "icon":"fa-youtube-play", "header":"YouTube", "linkText":"Watch Our Video", "url":"ex.youtube"}
    ];
    vm.externalUrlLink = function(external) {
      console.log(external);
      $window.open(redInfo.links(external), '_blank');
    }

  }]);

})();
