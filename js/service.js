app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
  });

// Ensemble de methodes d'appel a l'api
// Message est la variable bindé
app.service("service",['Restangular',
    function(Restangular) {

      this.obj = {};
      /*
      Restangular.all('datatable/json/0').getList().then(function (results) {
          $scope.myData = results;
      });
*/

      this.initRubrique = function() {
        return Restangular.one('/db').get().then(function (results) {
          return results;
        });
        /*
        v*ar singleSearch = Restangular.all('http://localhost:3000/db');
        this.obj = singleSearch.get().then(function(response){
          console.log(response);
          return response;
        })
*/


      };




    }]
);
