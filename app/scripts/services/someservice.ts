/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export function someServiceFactory($q, $timeout) {
    var defered = $q.defer();
    $timeout(function(){
      defered.resolve("hello");
      }, 3000);
    return defered.promise;
  }
}

angular.module('angularTsApp')
  .factory('someService', ['$q','$timeout', angularTsApp.someServiceFactory]);
