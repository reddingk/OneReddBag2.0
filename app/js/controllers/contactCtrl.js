(function(){
 "use strict";

  angular.module('contactCtrl').controller('ContactController', ['$state', function($state){
    var vm = this;
    vm.title = "Help Us";
    vm.mainImage = "img/contactus.jpg";

  }]);

})();
