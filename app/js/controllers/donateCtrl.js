(function(){
 "use strict";

  angular.module('donateCtrl').controller('DonateController', ['$state', function($state){
    var vm = this;
    vm.title = "Donate";
    vm.mainImage = "img/page_imgs/donate.jpg";

    vm.donationAmounts = [ 10, 20, 40, 100, 300, 500, 650, 800, 1000];

    vm.DonationType = function(amount) {
        if(amount < 300)
          return 'basic';
        else {
          return 'sponsorship';
        }
    }

    vm.makeDonation = function(amount) {
      if(amount == '?') {
        console.log('$ OTHER');
        window.open('https://www.gofundme.com/1ReddBag/donate', '_blank');
      }
      else if(amount < 300){
        console.log('$' + amount + ' - normal');
        window.open('https://www.gofundme.com/1ReddBag/donate', '_blank');
      }
      else {
        console.log('$' + amount + ' - sponsor');
        window.open('https://www.gofundme.com/1ReddBag/donate', '_blank');
      }
    }

  }]);

})();
