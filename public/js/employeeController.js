

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope,employeeService) {
  // $scope.firstName = "John";
  // $scope.lastName = "Doe";
  // console.log($scope.lastName);
  $scope.saveData=function(){
    console.log($scope);
    employeeService.saveService($scope.emp);
        
  }

  $scope.getAllDetails=function(){
    $scope.allData=employeeService.getAllDetailsService();
        
  }
  $scope.getAllDetails();
});
