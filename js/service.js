
app.service("service",['Restangular',
    function(Restangular) {



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
