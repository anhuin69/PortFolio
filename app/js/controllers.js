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

      $scope.selectedView = {
        path: "partials/skills-mobile.html",
        title: "Mobile",
        angle: "0",
        color: "#f1c40f"
      };

      $scope.pieType = "pie";

      $scope.pieConfig = {
          labels: true,
          innerRadius: '80%',
          tooltips: false,
          colors: ["#f1c40f", "#e67e22", "#2980b9"],
          labelClass: 'svg-pie-chart-label',
          "legend": {
            "display": false,
            "position": "right"
          },
          click : function(d) {

            for (var i = 0; i < $scope.pieData.data.length; i++) {
              if (d.data.view == $scope.pieData.data[i].view) {
                $scope.selectedView.color = $scope.pieConfig.colors[i];
                $scope.pieData.data[i].y = [2];
              }
              else {
                $scope.pieData.data[i].y = [1];
              }
            }
            $scope.selectedView.path = "partials/skills-" + d.data.view + ".html";
            $scope.selectedView.angle = d.data.angle;
            $scope.selectedView.title = d.data.title;
          },
          mouseover : function(d) {
          },
          mouseout : function(d) {
          }
        };        

      $scope.pieData = {
        series : ["1", "2", "3"],
        data : [{
              view: "mobile",
              title: "Mobile",
              angle: 0,
              x: [""],
              y: [2]
            },
            {
              view: "software",
              title: "Software",
              angle: 270,
              x: [""],
              y: [1]
            },
            {
              view: "web",
              title: "Web & Scripting",
              angle: 180,
              x: [""],
              y: [1]
            }]     
      };

     

  	}])
	.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    	$scope.isActive = function (page) {
    		return $location.path() === page;
    	};        
  	}
]);
