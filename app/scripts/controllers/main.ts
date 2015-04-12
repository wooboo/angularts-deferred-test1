/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }
  export class MainCtrl extends BaseCtrl {
    constructor (private $scope: IMainScope, private myService, private someService) {
      super(arguments);
    }
    init($scope, myService, someService){
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
        angular.extend(this.myService, myService);
        angular.extend(this.someService, someService);
      }
  }
}

angular.module('angularTsApp')
  .controller('MainCtrl', angularTsApp.MainCtrl);
