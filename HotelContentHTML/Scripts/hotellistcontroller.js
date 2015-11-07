hotelcontentApp.controller("hotelListcontroller", function($scope,$http)
{
	$http.get('json/HotelList.json').success(function(data)
		{
                  /*Read records from json service */
			$scope.hotellist=data.records;
                  /*populate paging info object based on data */
      $scope.paginginfo=
      {
        totalrecords: data.records.length,
        countfrom:1,
        countto:4
      };
		});
});
