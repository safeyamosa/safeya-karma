(function () {
    'use strict';

    angular.module('app', [
            "ui.router"
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("phones", {
                url: "/",
                templateUrl: "/views/phone/create.html",
                controller: "phoneController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/phone/create.html",
                controller: "phoneController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/phone/create.html",
                controller: "phoneController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/phone/details.html",
                controller: "phoneController"
            }).state("login", {
                url: "/login",
                templateUrl: "/views/login.html",
                controller: "loginController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3000/api'
        });
})();