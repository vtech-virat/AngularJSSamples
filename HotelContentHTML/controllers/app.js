var hotelcontentApp = angular.module("hotelcontentApp", ["ngRoute"]);

hotelcontentApp.config(function($routeProvider) {
    $routeProvider.
      when("/hotellist", {
        templateUrl: "views/HotelList.html",
        controller: "hotelListcontroller"
      }).
      when("/newhotel",
      {
          templateUrl:"views/HotelDetailsPage1.html",
          controller:"hoteldetailscontroller"
      }).otherwise({
        redirectTo: "/hotellist"
      });
        });

