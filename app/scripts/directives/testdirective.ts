/// <reference path="../app.ts" />

'use strict';

module angularTsApp {

  export class Testdirective implements ng.IDirective {
    template = '<div></div>';
    restrict = 'E';
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      element.text('this is the testDirective directive');
    }
  }

  export function testDirectiveFactory() {
    return new angularTsApp.Testdirective();
  }

}

angular.module('angularTsApp')
  .directive('testDirective', angularTsApp.testDirectiveFactory);
