(function(){
   "use strict";

    angular.module('directives').directive('isVisible', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          // get element position
          var elementPos = (attrs.voffset == undefined ? 0 : (1-attrs.voffset));          
          var el = element[0];
          while(el.offsetParent){
            el = el.offsetParent;
            elementPos += el.offsetTop;
          }


          angular.element($window).bind("scroll", function() {
            var windowp = angular.element($window)[0];
            if((windowp.pageYOffset >= (elementPos + 10)) && !element.hasClass("screenVisible")){
              element.addClass("screenVisible");
            }
            else {
              if(element.hasClass("screenVisible")){
                //element.removeClass("screenVisible");
              }
            }

          });
        }
      }

    }]);

})();
