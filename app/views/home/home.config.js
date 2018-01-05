export function routes($stateProvider){
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.template.html'),
      controller: 'HomeController',
      controllerAs: '$ctrl'
    });
}

routes.$inject = ['$stateProvider'];
