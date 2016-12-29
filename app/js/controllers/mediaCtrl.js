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
      vm.activeLevel = {"id":1, "parent":"", "title":""};
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
        vm.activeNav = { "level":2, "items":[{"title":"<<"}]};
        if(vm.activeLevel.parent == "photos" || navItem == "photos"){
          vm.activeLevel.parent = "photos";
          vm.activeLevel.title = "photos";
          if(vm.media.photos != null){
            for(var i =0; i < vm.media.photos.folders.length; i++){
              vm.activeNav.items.push( {"title":vm.media.photos.folders[i]} );
            }
          }
        }
        else{
          vm.activeLevel.parent = "videos";
          vm.activeLevel.title = "videos";
          vm.activeNav.items.push( {"title":"Videos", "noLink":1} );
          if(vm.media.videos != null){ }
        }
      }
      else if(vm.activeLevel.id == 3)
      {
        vm.activeLevel.title = navItem;
        vm.activeNav = { "level":3, "items":[{"title":"<<"}, {"title":navItem, "noLink":1}]};
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
          if(vm.activeLevel.title == "photos" && vm.media.photos != null){
            vm.pageMedia = {"type":"folders", "content":[]};
            for(var i =0; i < vm.media.photos.folders.length; i++) {
              vm.pageMedia.content.push(vm.media.photos.folders[i]);
            }
          }
          else if(vm.activeLevel.title == "videos"){
              vm.pageMedia = {"type":"videos", "content":[]};
          }
      }
      else if(vm.activeLevel.id == 3)
      {
        if(vm.media.photos.images != null)
        {
          vm.pageMedia = {"type":"photos", "content":[], "displayedContent":[], "displayedcount":9};
          for(var i =0; i < vm.media.photos.images.length; i++) {
            if(vm.media.photos.images[i].indexOf(vm.activeLevel.title) > -1){
              var imgLoc = vm.media.photos.images[i];
              vm.pageMedia.content.push(imgLoc.substring(imgLoc.indexOf("img")));
              if(vm.pageMedia.displayedContent.length < 9)
                {vm.pageMedia.displayedContent.push(imgLoc.substring(imgLoc.indexOf("img")));}
            }
          }
        }
      }
      //console.log(vm.pageMedia);
    }

    vm.loadImgs = function() {
      var oldCount = vm.pageMedia.displayedcount;
      var newCount = (vm.pageMedia.content.length < (oldCount + 9) ? vm.pageMedia.content.length : (oldCount + 9))
      vm.pageMedia.displayedcount = newCount;

      //console.log("| content " + vm.pageMedia.content.length +" | old "+ oldCount + " | new " + newCount)

      for(var i = oldCount; i < newCount; i++) {
        vm.pageMedia.displayedContent.push(vm.pageMedia.content[i]);
      }
    }
    vm.styleFolder = function(title){
      return title.split("-").join(".");
    }

  }]);

})();
