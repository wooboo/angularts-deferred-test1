/// <reference path="refs.d.ts" />
/// <reference path="../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-cookies.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-resource.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-sanitize.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-route.d.ts" />

'use strict';

angular.module('angularTsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// angular.element(document).ready(function() {
//       deferredBootstrapper.bootstrap({
//         element: document.body,
//         module: 'angularTsApp',
//         resolve: {
//           APP_CONFIG: ['$q','$timeout', function ($q, $timeout) {
//             var deferrer = $q.defer();
//             $timeout(function(){
//                 deferrer.resolve('hurray!!!');
//               },3000);
//             return deferrer.promise;
//           }]
//         }
//       });

//     });
