//CTRL 1
var app = angular.module("app");
app.controller("ctrl", function($scope, service){
  $scope.foo = service.foo;

  $scope.setData = function(string){
    service.setData(string);
  };
});
