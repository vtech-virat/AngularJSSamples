hotelcontentApp.controller("hoteldetailscontroller",function($scope)
{
	$scope.HotelModel={};
	$scope.nextStep=function()
	{
		alert($scope.HotelModel.website);				
	};
});