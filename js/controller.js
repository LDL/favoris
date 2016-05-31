app.controller("myCtrl",  ['$scope','categories',function($scope,categories) {

  $scope.categories = categories;
  $scope.liens = [];

  $scope.afficherLiens = function(value){
    $scope.liens = [];
    $scope.liens.push(value);
  }

}]);
