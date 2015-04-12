/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/testdirective.ts" />

'use strict';

describe('Directive: testDirective', () => {

  // load the directive's module
  beforeEach(module('angularTsApp'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<test-directive></test-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the testDirective directive');
  }));
});
