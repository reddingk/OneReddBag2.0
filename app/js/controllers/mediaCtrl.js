(function(){
 "use strict";

  angular.module('mediaCtrl').controller('MediaController', ['$state', 'redInfo', '$filter', function($state, redInfo, $filter){
    var vm = this;
    vm.title = "Media";
    vm.mainImage = "img/";
    vm.media = undefined;
    vm.selectedFolderImages =[];
    vm.pageMedia = null;

    vm.getMedia = function() {
      redInfo.media.imgs.all().then(
        function(retResults) {
          vm.media = {"photos": retResults, "videos": redInfo.media.videos.all()};
          console.log(vm.media);
          vm.buildNavigation();
          // TEST
          //vm.getFolderImages("6-27-15");
         },
        function(error) { console.log("ERROR - No Results")}
      );
    }();

    vm.getFolderImages = function(folder) {
      vm.media.images
      .filter(function(image) { return (image.indexOf("media_imgs\\"+folder) > -1)})
      .forEach(function (image) { vm.selectedFolderImages.push(image.substring(image.lastIndexOf("\\") + 1, image.length)); });
    }

    vm.buildNavigation = function() {
      vm.activeNav = { "level":1, "items":[{"title":"photos"}, {"title":"videos"}]};
      vm.activeLevel = {"id":1, "parent":""};
    }

    vm.mediaNav = function(navItem) {
      var action = (navItem == "<<"? 0: 1);

      if(action == 0 && vm.activeLevel.id > 1)
      { vm.activeLevel.id -= 1; }
      else if(action == 1)
      { vm.activeLevel.id += 1; }

      if(vm.activeLevel.id < 2)
      {vm.buildNavigation();}
      else if(vm.activeLevel.id == 2)
      {
        vm.activeLevel.parent = navItem;
        vm.activeNav = { "level":2, "items":[{"title":"<<"}]};
        if(navItem == "photos"){
          if(vm.media.photos != null){
            for(var i =0; i < vm.media.photos.folders.length; i++){
              vm.activeNav.items.push( {"title":vm.media.photos.folders[i]} );
            }
          }
        }
        else{
          if(vm.media.videos != null){

          }
        }
      }
      else if(vm.activeLevel.id == 3)
      {
        vm.activeLevel.parent = navItem;
        vm.activeNav = { "level":3, "items":[{"title":"<<"}, {"title":navItem}]};
      }
      vm.changeMedia();
    }

    vm.getNavId = function(level) {
      return "lvl"+level;
    }

    vm.changeMedia = function() {
      if(vm.activeLevel.id == 1) {
        vm.pageMedia = null;
      }
      else if(vm.activeLevel.id == 2) {
          if(vm.activeLevel.parent == "photos" && vm.media.photos != null){
            vm.pageMedia = {"type":"folder", "content":[]};
            for(var i =0; i < vm.media.photos.folders.length; i++) {
              vm.pageMedia.content.push(vm.media.photos.folders[i]);
            }
          }
      }
      else if(vm.activeLevel.id == 3)
      {
        if(vm.media.photos.images != null)
        {
          vm.pageMedia = {"type":"photos", "content":[]};
          for(var i =0; i < vm.media.photos.images.length; i++) {
            if(vm.media.photos.images[i].indexOf(vm.activeLevel.parent > -1))
              vm.pageMedia.content.push(vm.media.photos.images[i]);
          }
        }
      }
      console.log(vm.pageMedia);
    }

  }]);

})();
