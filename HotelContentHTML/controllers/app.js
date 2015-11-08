var hotelcontentApp = angular.module("hotelcontentApp", ["ngRoute"]);

hotelcontentApp.config(function($routeProvider) {
    $routeProvider.
      when("/hotellist", {
        templateUrl: "views/hotellist.html",
        controller: "hotelListcontroller"
      }).
      when("/newhotelstep1",
      {
          templateUrl:"views/newhotel.html",
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

