/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export interface IMyrouteScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MyrouteCtrl {

    constructor (private $scope: IMyrouteScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angularTsApp')
  .controller('MyrouteCtrl', angularTsApp.MyrouteCtrl);
