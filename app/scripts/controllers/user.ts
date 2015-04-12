/// <reference path="../app.ts" />

'use strict';

module angularTsApp {

  export class UserCtrl extends BaseCtrl {

    constructor (private $scope) {
      super($scope, arguments);
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angularTsApp')
  .controller('UserCtrl', ['$scope', angularTsApp.UserCtrl]);
