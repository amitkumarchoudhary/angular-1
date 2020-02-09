// require('D:/Project/Angularjs/AngularJs-1/public/js/homecontainer/headercontainer.js')
var app = angular.module("demoMyApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : "../js/homecontainer/leftcontainer/leftcontainer.html"
    })
    .when('/red', {
        templateUrl : "../js/homecontainer/leftcontainer/leftcontainer.html"
    })
    .when('/green', {
        template : "demo is called...."
    })
    .when('/blue', {
        templateUrl : "blue.htm"
    })
    .otherwise({
        redirectTo: '/'
    });
});