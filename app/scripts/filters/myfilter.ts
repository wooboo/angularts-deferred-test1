/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export function myFilterFilterFactory(): Function {
    return myFilterFilter;
  }

  function myFilterFilter(input, param) {
  //usage {{"text" | myFilter: "suffix"}}
  //returns 'myFilter filter: text suffix'
    return 'myFilter filter: ' + input + (param ? ' ' + param: '');
  }
}

angular.module('angularTsApp')
  .filter('myFilter', angularTsApp.myFilterFilterFactory);