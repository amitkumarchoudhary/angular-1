

app.service('leftContainerService', function($http,$window) {

    this.dddata=null;
    this.saveService = function (empdata) {

    var post = $http({
        method: "POST",
        url: "ttp://localhost:9090/employee/details/saveEmployeeDetails",
        dataType: 'json',
        data: empdata,
        headers: { "Content-Type": "application/json" }
    });

    post.success(function (data, status) {
        // $scope.empdata = data;
        // $scope.IsVisible = true;
    });

    post.error(function (data, status) {
        $window.alert(data.Message);
    });
    }
        // $http.post("http://localhost:9090/employee/details/saveEmployeeDetails",data).then(function(res){
        //    $scope.alldata=res.data;
        //    alert("submit data successfull.....");
        // });

    this.getAllDetailsService = function () {
        // $http.get("http://localhost:9090/employee/details").then(function(response){
        //     //console.log("response..."+JSON.stringify(response));
        //     this.dddata=JSON.stringify(response.data);;
        // // return this.dddata;
        // return response.data;
        // return $http.get("http://localhost:9090/employee/details");
        // });
        return $http.get("http://localhost:9090/employee/details");
    }

   //var fff= this.getAllDetailsService();
  });


