(function(){

  angular
    .module('config')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            templateUrl: 'views2/home.html',
            controller: 'HomeController as hc'
          },
          'header':{
            templateUrl: 'views2/templates/_header.html',
            controller: 'HeaderController as hdc'
          },
          'footer':{
            templateUrl: 'views2/templates/_footer.html'
          }
        }
      })
      .state('app.helpus', {
        url: "helpus",
        views: {
          'content@': {
            templateUrl: 'views/helpus.html',
            controller: 'HelpUsController as huc'
          }
        }
      })
      .state('app.contact', {
        url: "contact",
        views: {
          'content@': {
            templateUrl: 'views/contact.html',
            controller: 'ContactController as cc'
          }
        }
      })
      .state('app.ourstory', {
        url: "ourstory",
        views: {
          'content@': {
            templateUrl: 'views/ourstory.html',
            controller: 'OurStoryController as oc'
          }
        }
      })
      .state('app.news', {
        url: "news",
        views: {
          'content@': {
            templateUrl: 'views/news.html',
            controller: 'NewsController as nc'
          }
        }
      })
      .state('app.media', {
        url: "media",
        views: {
          'content@': {
            templateUrl: 'views/media.html',
            controller: 'MediaController as mc'
          }
        }
      })
      .state('app.donate', {
        url: "donate",
        views: {
          'content@': {
            templateUrl: 'views/donate.html',
            controller: 'DonateController as dc'
          }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });


      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

    }]);


})();
