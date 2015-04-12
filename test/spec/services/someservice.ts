/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/someservice.ts" />

'use strict';

describe('Service: someService', () => {

  // load the service's module
  beforeEach(module('angularTsApp'));

  // instantiate service
  var someService;
  beforeEach(inject(_someService_ => {
    someService = _someService_;
  }));

  it('should do something', () => {
    expect(!!someService).toBe(true);
  });

});
