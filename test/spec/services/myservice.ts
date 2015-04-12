/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/myservice.ts" />

'use strict';

describe('Service: myService', () => {

  // load the service's module
  beforeEach(module('angularTsApp'));

  // instantiate service
  var myService;
  beforeEach(inject(_myService_ => {
    myService = _myService_;
  }));

  it('should do something', () => {
    expect(!!myService).toBe(true);
  });

});
