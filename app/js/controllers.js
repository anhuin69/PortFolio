'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MainController', ['$scope', function ($scope) {
  
  	}])
  .controller('SkillsController', ['$scope', function ($scope) {
      $scope.getClassColorByLevel = function(value) {
        if (value < 35)
          return 'progress-fill-orange';
        else if (value < 75)
          return 'progress-fill-yellow';
        return 'progress-fill-green';
      };

  		$scope.skillList = [
        {title: "Android", logoUrl: "img/android_logo.png", details: [
          {title: "Java", lvl: 100}, 
          {title: "Android 2.3+", lvl: 95}, 
          {title: "Android Studio", lvl: 95}]},
        {title: "iOS", logoUrl: "img/apple_logo.png", details: [
          {title: "Objective C", lvl: 25}, 
          {title: "iOS 7", lvl: 35}, 
          {title: "Xcode 5", lvl: 65}]},
        {title: "Windows Phone", logoUrl: "img/windows_logo.png", details: [
          {title: "C#", lvl: 90}, 
          {title: "WP 8 Framework", lvl: 20}, 
          {title: "Visual Studio", lvl: 70}]}
      ];
  	}])
	.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
      //TODO: manage navigation draw with ng-repeat

    	$scope.isActive = function (page) {
    		return $location.path() === page;
    	};        
  	}
]);
