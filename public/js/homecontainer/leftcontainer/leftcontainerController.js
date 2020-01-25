

var app = angular.module("userApp", []);

app.controller("myAppleft", function($scope,$q,$http,leftContainerService) {
    $scope.userDataAll=[];
    $scope.dddata=[];
  // $scope.firstName = "John";
  $scope.lastName = "Doe";
  var deferred = $q.defer();
  var promise = deferred.promise;
  // console.log($scope.lastName);
  //$scope.allfecthData=null;
  $scope.saveData=function(){
    console.log($scope);
    
    employeeService.saveService($scope.emp);
        
  }

  $scope.getAllDetails=function(){
      
   
    leftContainerService.getAllDetailsService().then(function(response){
      $scope.dddata=response.data;
    })
       
    //     promise.then(getdata);
    //     alert('Success: ' + getdata);
    
    

    // console.log('allfecthData....'+$scope.allfecthData);
        
  }

  $scope.getdata=function(response){

  }
// $scope.getAllDetailsService = function () {
//     $http.get("http://localhost:9090/employee/details").then(function(response){
//         //console.log("response..."+JSON.stringify(response));
//         dddata=JSON.stringify(response.data);
//         console.log("...............dddata.........."+dddata);
//         $scope.userDataAll=dddata;
//     // return this.dddata;
//     return $scope.userDataAll;
//     });
// }
//   $scope.getAllDetailsService();
  $scope.getAllDetails();
  
});
