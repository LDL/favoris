
// Ensemble de methodes d'appel a l'api
// Message est la variable bindé
app.service("service",['Restangular',
    function(Restangular) {

      /*
      Restangular.all('datatable/json/0').getList().then(function (results) {
          $scope.myData = results;
      });
*/

      this.initRubrique = function() {
        return Restangular.one('/db').get().then(function(categories){
          return Object.keys(Restangular.stripRestangular(categories)).map(function(category){
            return {
              category: category,
              favorites: categories[category]
            }
          });
        });
      };




    }]
);
