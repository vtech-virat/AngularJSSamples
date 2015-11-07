var hotelcontentApp = angular.module("hotelcontentApp", ["ngRoute"]);

hotelcontentApp.config(function($routeProvider) {
    $routeProvider.
      when("/hotellist", {
        templateUrl: "views/HotelList.html",
        controller: "hotelListcontroller"
      }).
      when("/newhotelstep1",
      {
          templateUrl:"views/HotelDetailsPage1.html",
          controller:"hoteldetailscontroller"
      }).
      when("/newhotelstep2",
      {
          templateUrl:"views/step2.html",
          controller:"hoteldetailscontrollerstep2"
      })
      .otherwise({
        redirectTo: "/hotellist"
      });
        });

