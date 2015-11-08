hotelcontentApp.controller("hotelListcontroller", function($scope,$http)
{
      /*Read records from json service */
	$http.get('json/HotelList.json').success(function(data)
		{
		$scope.hotels=data.records;
                  
      /*populate paging info object based on data */
        $scope.paginginfo=new PagingInfo()
        $scope.paginginfo.totalRecords= data.records.length;
        $scope.paginginfo.countFrom=1;
        $scope.paginginfo.countTo=4;
        $scope.paginginfo.currentPage=1,
        $scope.paginginfo.totalPages=1
		});
});
