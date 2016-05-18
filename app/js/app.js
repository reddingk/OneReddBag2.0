(function () {
	"use strict";
	  angular.module('headerCtrl', ['ui.bootstrap']);
    angular.module('homeCtrl', ['ui.bootstrap']);
    angular.module('directives', []);

    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router', 'directives', 'config','homeCtrl','headerCtrl']);

})();
