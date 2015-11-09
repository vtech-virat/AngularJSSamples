hotelcontentApp.controller("hotelListcontroller", function($scope,$http)
{
	var currentPage=1;
	var currentPageSize=2;
	var globalHotels={};
	$http.get('json/HotelList.json').success(function(data)
		{
              $scope.paginginfo=getPagingInfo(currentPageSize,currentPage,data.records.length);
			  globalHotels= data.records;
			  var tobedisplayedHotelds = JSON.parse(JSON.stringify(data.records));
			  $scope.hotels=tobedisplayedHotelds.slice(0,currentPageSize);
            });
			
		 $scope.nextPage=function()
		 		 {
			 var sliceStartIndex=((currentPage)*currentPageSize);
			 var sliceEndIndex = (sliceStartIndex+currentPageSize);
			 currentPage=currentPage+1;
			  $scope.paginginfo=getPagingInfo(currentPageSize,currentPage,globalHotels.length);
			  var tobedisplayedHotelds = JSON.parse(JSON.stringify(globalHotels));
			  $scope.hotels=tobedisplayedHotelds.slice(sliceStartIndex,sliceEndIndex);
		 }
		 
		 $scope.prevPage=function()
		 		 {
				currentPage=currentPage-1;
				var sliceStartIndex=0		  
				if(currentPage==1)
				{
					sliceStartIndex=0;
				}
				else
				{
					sliceStartIndex= ((currentPage-1)*currentPageSize);
				}
			 var sliceEndIndex = sliceStartIndex+currentPageSize;
			  $scope.paginginfo=getPagingInfo(currentPageSize,currentPage,globalHotels.length);
			  var tobedisplayedHotelds = JSON.parse(JSON.stringify(globalHotels));
			  $scope.hotels=tobedisplayedHotelds.slice(sliceStartIndex,sliceEndIndex);
		 }
		
});

