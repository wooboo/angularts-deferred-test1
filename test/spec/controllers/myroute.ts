/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/myroute.ts" />

'use strict';

describe('Controller: MyrouteCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsApp'));

  var MyrouteCtrl: angularTsApp.MyrouteCtrl,
    scope: angularTsApp.IMyrouteScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    MyrouteCtrl = $controller('MyrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
