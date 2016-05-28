(function () {
	"use strict";
	  angular.module('headerCtrl', ['ui.bootstrap']);
    angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('helpUsCtrl', ['ui.bootstrap', 'ui.calendar']);
		angular.module('contactCtrl', ['ui.bootstrap']);
		//
		angular.module('dataconfig', []);
    angular.module('directives', []);

    angular.module('ORBApp', ['ngMaterial','ngAnimate', 'ui.router','directives', 'config','dataconfig','homeCtrl','headerCtrl','helpUsCtrl','contactCtrl']);

})();
