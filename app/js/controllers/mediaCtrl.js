(function(){
 "use strict";

  angular.module('mediaCtrl').controller('MediaController', ['$state', 'redInfo', '$filter', function($state, redInfo, $filter){
    var vm = this;
    vm.title = "Media";
    vm.mainImage = "img/";
    vm.media = undefined;
    vm.selectedFolderImages =[];

    vm.getMedia = function() {
      redInfo.media.imgs.all().then(
        function(retResults) {
          vm.media = retResults;
          // TEST
          vm.getFolderImages("6-27-15");
         },
        function(error) { console.log("ERROR - No Results")}
      );
    }();

    vm.getFolderImages = function(folder) {
      vm.media.images
      .filter(function(image) { return (image.indexOf("media_imgs\\"+folder) > -1)})
      .forEach(function (image) { vm.selectedFolderImages.push(image.substring(image.lastIndexOf("\\") + 1, image.length)); });
    }

  }]);

})();
