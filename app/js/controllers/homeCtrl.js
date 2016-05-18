(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state',function($state){
      var vm = this;
      vm.title = "Home";
      vm.myInterval = 5000;
      //vm.active = 1;
      //vm.noWrapSlides = false;

      vm.slides = [
        {"id":"0","image":"img/t0.jpg","text":""},
        {"id":"1","image":"img/t1.jpg","text":""},
        {"id":"2","image":"img/t2.jpg","text":""},
        {"id":"3","image":"img/t3.jpg","text":""},
        {"id":"4","image":"img/t4.jpg","text":""}];
    }]);

})();
