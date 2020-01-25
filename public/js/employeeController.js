

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope,employeeService) {
  // $scope.firstName = "John";
  $scope.lastName = "Doe";
  // console.log($scope.lastName);
  //$scope.allfecthData=null;
  $scope.saveData=function(){
    console.log($scope);
    
    employeeService.saveService($scope.emp);
        
  }

  $scope.getAllDetails=function(){
   
    $scope.allfecthData=employeeService.getAllDetailsService();
    console.log('allfecthData....'+$scope.allfecthData);
        
  }
  $scope.getAllDetails();
});
