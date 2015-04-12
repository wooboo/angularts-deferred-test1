/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
  export interface IVmScope extends ng.IScope{
    vm: any;
  }
  export class BaseCtrl {
    init(...args:any[]):void{}
    constructor($scope:IVmScope, services:IArguments) {
        $scope.vm = this;
        angular.injector(['angularTsApp']).invoke(['$timeout','deferedResolver',($timeout:ng.ITimeoutService, deferedResolver: IDeferedResolver)=>{
          $timeout(function(){
            deferedResolver($scope.vm,
              services[0],
              services[1],
              services[2],
              services[3],
              services[4],
              services[5],
              services[6],
              services[7])($scope.vm.init);
          });
        }]);
    }
  }
}
