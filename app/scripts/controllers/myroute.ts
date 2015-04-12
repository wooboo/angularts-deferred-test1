/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export class MyrouteCtrl /*extends BaseCtrl*/ {
    public hello:string;
    constructor (private deferedResolver:IDeferedResolver, private $scope, private myService, private someService) {
      //super($scope, arguments);
      deferedResolver(this, myService, someService)(this.init);
    }
    public init(myService, someService){
      this.myService = myService;
      this.someService = someService;
      this.hello = someService;
    }
  }
}

angular.module('angularTsApp')
  .controller('MyrouteCtrl', angularTsApp.MyrouteCtrl);
