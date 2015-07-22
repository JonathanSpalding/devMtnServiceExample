//CTRL 2
angular.module("app").controller("ctrl2", function($scope, service){
  $scope.foo = service.foo;

  $scope.getData = function(){
    $scope.foo = service.getData();
  };
});
