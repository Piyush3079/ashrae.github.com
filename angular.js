var ashrae = angular.module('ashrae', ['ngRoute']);

	ashrae.config(function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                // controller: 'mainController'
                
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                // controller: 'genericController'
            })
            .when('/about',{
                templateUrl: 'templates/about.html',
                // controller: 'aboutController'
            })
            .when('/calender',{
                templateUrl: 'templates/events.html',
                // controller: 'eventsController'
            })
            .when('/team',{
                templateUrl: 'templates/team.html',
                // controller: 'teamController'
            })
            .when('/membership',{
                templateUrl: 'templates/membership.html',
                // controller: 'membershipController'
            })
            
            // .when('/elements', {
            //     templateUrl: 'elements.html',
            //     controller: 'elementController'
            // })
            
        });