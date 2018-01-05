export function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
  $urlRouterProvider.otherwise('/');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export const APP_CONFIG = {
  api: {
    "host": "http://localhost",
    "port": "3000"
  }
}
