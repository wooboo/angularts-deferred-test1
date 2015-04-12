/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
export interface IDeferedResolver{
  (parent:any,...args:any[]):((successCallback:(...res:any[])=>void,
              errorCallback?:(reason:any)=>void,
              notifyCollback?:(state:any)=>void)=>void);
}
export function deferedResolverFactory($q:ng.IQService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService):IDeferedResolver {
    function deferedResolver(parent:any,...args:any[]){
      var callback, errorCallback, notifyCollback;
      var promises = args.map((v)=>$q.when(v));
      $q.all(promises).then((resolvedPromises)=>{
        if(callback){
            callback.apply(parent, resolvedPromises);
        }
      },(reason)=>{
        if(errorCallback){
            errorCallback.apply(parent, [reason]);
        }
      },(state)=>{
        if(notifyCollback){
            notifyCollback.apply(parent, [state]);
        }
      });
      return (successCallback:(...res:any[])=>void,
              errorCallback?:(reason:any)=>void,
              notifyCollback?:(state:any)=>void)=>
      {
        callback = successCallback;
        errorCallback = errorCallback;
        notifyCollback = notifyCollback;
      }
    }
    return deferedResolver;
  }
}

angular.module('angularTsApp')
  .factory('deferedResolver', angularTsApp.deferedResolverFactory);
