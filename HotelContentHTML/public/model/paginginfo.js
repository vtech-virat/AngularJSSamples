function PagingInfo()
      {
        totalRecords="";
        countFrom="";
        countTo="";
        currentPage="";
        totalPages="";
      }
      
   function getPagingInfo(pageSize,currentPage,totalRecords)
   {   
  var paginginfo=new PagingInfo()
         paginginfo.totalRecords= totalRecords;
         paginginfo.pageSize= pageSize;
       paginginfo.currentPage=currentPage;
        if(paginginfo.currentPage==1)
        {
        paginginfo.countFrom=1;
        }
        else
        {
        paginginfo.countFrom=((currentPage-1)*pageSize)+1;
        }
        paginginfo.countTo = paginginfo.countFrom-1 + paginginfo.pageSize;
        if (paginginfo.countTo > paginginfo.totalRecords)
            paginginfo.countTo = totalRecords
            
paginginfo.totalPages=Math.ceil(paginginfo.totalRecords /paginginfo.pageSize);
return paginginfo;
        
   }
  