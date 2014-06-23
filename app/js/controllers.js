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

      $scope.pieType = "pie";

      $scope.pieConfig = {
          labels: true,
          innerRadius: '70%',
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
                $scope.selectedView.skillTree = $scope.pieData.data[i].tree;
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
              angle: 90,
              x: [""],
              y: [2],
              tree: [
                {"name": "Android"},
                {"name": "IOS"}
              ]
            },
            {
              view: "software",
              title: "Software",
              angle: 0,
              x: [""],
              y: [1],
              tree: [
                {"name": "C"},
                {"name": "C++"},
                {"name": "Java"},
                {"name": ".NET"}
              ]
            },
            {
              view: "web",
              title: "Web",
              angle: 270,
              x: [""],
              y: [1],
              tree: [
                {"name": "Ruby", "children": [
                  {"name": "Rails", "children": [
                    {"name": "RESTful API"},
                    {"name": "Google APIs", "children": [
                      {"name": "Places"},
                      {"name": "Google+"}
                    ]},
                    {"name": "Facebook Graph API"}
                  ]}
                ]},
                {"name": "Javascript", "children": [
                  {"name": "Angular JS"}
                ]},
                {"name": "PHP"},
                {"name": "SQL"}
              ]
            }]     
      };

      $scope.selectedView = {
        path: "partials/skills-" + $scope.pieData.data[0].view + ".html",
        title: $scope.pieData.data[0].title,
        angle: $scope.pieData.data[0].angle,
        color: $scope.pieConfig.colors[0],
        skillTree: $scope.pieData.data[0].tree
      };

      createTree();

  	}])
	.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    	$scope.isActive = function (page) {
    		return $location.path() === page;
    	};        
  	}
]);
