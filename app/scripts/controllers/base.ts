/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export class BaseCtrl {
    init(...args:any[]):void{}
    constructor(services:IArguments) {
        angular.injector(['angularTsApp']).invoke(['deferedResolver',(deferedResolver: IDeferedResolver)=>{
          deferedResolver(this, services[0],services[1],services[2],services[3],services[4],services[5], services[6],services[7])(this.init);
        }]);
    }
  }
}
