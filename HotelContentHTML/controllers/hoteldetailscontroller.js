hotelcontentApp.controller("hoteldetailscontroller",function($scope,$http)
{
	$scope.countries={};
	 /*Read records from json service */
	$http.get('json/countries.json').success(function(data)
		{
		$scope.countries=data.countries;
		});
	
	$scope.HotelModel={};
	$scope.nextStep=function()
	{
		
// 		$http.post('/hotelcontentservice/submitData', { hotelcontent: JSON.stringify($scope.HotelModel) })
//                  .success(onSuccess)
//                  .error(onError);
// 				 
// 		var onSuccess = function (data, status, headers, config) {
//                 $scope.data = data;
//             };
// 
//             var onError = function (data, status, headers, config) {
//                 $scope.error = status;
//             }

	console.log(JSON.stringify($scope.HotelModel));
	
	};
});