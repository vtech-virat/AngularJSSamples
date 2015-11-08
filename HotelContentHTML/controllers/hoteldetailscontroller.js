hotelcontentApp.controller("hoteldetailscontroller",function($scope,$http)
{
	$scope.HotelModel={};
	$scope.nextStep=function()
	{
	console.log(JSON.stringify($scope.HotelModel));
		
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
	
	};
});