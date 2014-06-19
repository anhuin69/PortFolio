'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MainController', ['$scope', function ($scope) {
  
  	}])
  	.controller('SkillsController', ['$scope', function ($scope) {
  		$scope.softwareSkills = [
  			{"name": "C", "progress": "100%"},
  			{"name": "C++", "progress": "100%"},
  			{"name": "Java", "progress": "100%"},
  			{"name": "C#", "progress": "40%"}
  		];
  		$scope.webSkills = [
  			{"name": "Javascript", "progress": "100%"},
  			{"name": "PHP", "progress": "100%"},
  			{"name": "Ruby", "progress": "90%"},
  			{"name": "Python", "progress": "5%"}
  		];
  		$scope.mobileSkills = [
  			{"name": "Android", "progress": "90%"},
  			{"name": "Windows phone", "progress": "30%"},
  			{"name": "IOS", "progress": "5%"}
  		];
  	}])
	.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    	$scope.isActive = function (page) {
    		return $location.path() === page;
    	};        
  	}
]);
