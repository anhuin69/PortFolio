'use strict';

/* Directives */

var lastRoute = '';
var lastElem = '';

angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}]).
directive('routeAnimClass',function($route){
	return {
		link: function(scope, elm, attrs) {
			if (lastRoute === '' ||
				lastRoute === '/education' && ($route.current.originalPath === '/skills' || $route.current.originalPath === '/work') ||
				lastRoute === '/work' && $route.current.originalPath === '/skills' ||
				lastRoute === '/projects') 
			{
				var enterClass = "page-view-left";
			}
			else 
			{
				var enterClass = "page-view-right";
			}
			elm.addClass(enterClass);
			if (lastElem !== '')
			{
				lastElem.removeClass("page-view-left");
				lastElem.removeClass("page-view-right");
				lastElem.addClass(enterClass);
			}

			lastRoute = $route.current.originalPath;
			lastElem = elm;
		}
	}
});
