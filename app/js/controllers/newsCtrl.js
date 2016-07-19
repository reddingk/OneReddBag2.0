(function(){
 "use strict";

  angular.module('newsCtrl').controller('NewsController', ['$state', 'redInfo',function($state, redInfo){
    var vm = this;
    vm.title = "News";
    vm.mainImage = "img/page_imgs/news.jpg";

    vm.news = redInfo.news.all();
    vm.selectedItem = vm.news[0];

    vm.selectNews = function(item) {
      vm.selectedItem = item;
    }
    vm.isSelected = function(item){
      if((item.title == vm.selectedItem.title) && (item.date == vm.selectedItem.date))
        return 'selected';
      else {
        return '';
      }
    }

  }]);

})();
