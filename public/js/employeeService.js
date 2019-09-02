

app.service('employeeService', function($http) {
    this.saveService = function (data) {
        $http.post("http://localhost:9090/employee/details/saveEmployeeDetails",data).then(function(res){
           $scope.alldata=res.data;
           alert("submit data successfull.....");
        });
    }

    this.getAllDetailsService = function () {
        $http.get("http://localhost:9090/employee/details").then(function(response){
        return $scope.alldata=response.data;
        });
    }
  });