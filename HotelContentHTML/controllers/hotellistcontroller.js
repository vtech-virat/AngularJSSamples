hotelcontentApp.controller("hotelListcontroller", function($scope,$http)
{
      /*Read records from json service */
	$http.get('json/HotelList.json').success(function(data)
		{
		$scope.hotellist=data.records;
                  
      /*populate paging info object based on data */
        $scope.paginginfo=new PagingInfo()
        $scope.paginginfo.totalrecords= data.records.length;
        $scope.paginginfo.countfrom=1;
        $scope.paginginfo.countto=4;
        $scope.paginginfo.currentpageindex=1,
        $scope.paginginfo.totalpages=1
		});
});
