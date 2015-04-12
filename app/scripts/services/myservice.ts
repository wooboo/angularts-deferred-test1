/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export class Myservice {
    awesomeThings:any[] = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
}

angular.module('angularTsApp')
  .service('myService', angularTsApp.Myservice);
