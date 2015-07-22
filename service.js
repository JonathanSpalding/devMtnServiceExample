angular.module("app").service("service", function(){
  var data;
  this.setData = function(x){
    data = x;
  };

  this.getData = function(){
    return data;
  }
});
