/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/deferedresolver.ts" />

'use strict';

describe('Service: deferedResolver', () => {

  // load the service's module
  beforeEach(module('angularTsApp'));

  // instantiate service
  var deferedResolver;
  beforeEach(inject(_deferedResolver_ => {
    deferedResolver = _deferedResolver_;
  }));

  it('should do something', () => {
    expect(!!deferedResolver).toBe(true);
  });

});
