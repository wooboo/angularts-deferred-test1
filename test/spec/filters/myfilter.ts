/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/filters/myfilter.ts" />

'use strict';

describe('Filter: myFilter', () => {

  // load the filter's module
  beforeEach(module('angularTsApp'));

  // initialize a new instance of the filter before each test
  var myFilter;
  beforeEach(inject($filter => {
    myFilter = $filter('myFilter');
  }));

  it('should return the input prefixed with "myFilter filter:"', () => {
    var text = 'angularjs';
    expect(myFilter(text)).toBe('myFilter filter: ' + text);
  });

});
