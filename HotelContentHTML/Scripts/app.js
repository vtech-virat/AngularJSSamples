var hotelcontentApp = angular.module("hotelcontentApp", ["ngRoute"]);

hotelcontentApp.config(function($routeProvider) {
    $routeProvider.
      when("/hotellist", {
        templateUrl: "HotelList.html",
        controller: "hotelListcontroller"
      }).
      when("/newhotel",
      {
          templateUrl:"HotelDetails.html",
          controller:"hoteldetailscontroller"
      }).otherwise({
        redirectTo: "/hotellist"
      });
        });

