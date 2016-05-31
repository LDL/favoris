// Notre controller expose simplement le service a la vue
app.controller("myCtrl",  ['$scope','categories',function($scope,categories) {


  $scope.categories = categories;


}]);
