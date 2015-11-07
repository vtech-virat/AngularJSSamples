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

hotelcontentApp.controller("hotelListcontroller", function($scope,$http)
{
	$http.get('json/HotelList.json').success(function(data)
		{
			$scope.hotellist=data.records;
      $scope.paginginfo=
      {
        totalrecords: data.records.length,
        countfrom:1,
        countto:4
      };
		});
});


hotelcontentApp.controller("hoteldetailscontroller", function($scope)
{
  $scope.Id=100;
});

