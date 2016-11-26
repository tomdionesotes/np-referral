'use strict';

var npRefer = angular.module('npRefer', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "templates/start.html",
                controller: "MainController"
            })
            .when("/category/:categoryname", {
                templateUrl: "category.html",
                controller: "CategoryController"
            })
            .when("/issue/:issuename", {
                templateUrl: "issue.html",
                controller: "IssueController"
            })
            //.otherwise({redirectTo: "/main"})
        ;
    });