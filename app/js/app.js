'use strict';

var npRefer = angular.module('npRefer', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "templates/start.html",
                controller: "MainController"
            })
            .when("issue", {
                templateUrl: "templates/issue.html",
                controller: "IssueController"
            })
            .otherwise({redirectTo: "/main"});
    });