/// <reference path="../app.ts" />

'use strict';

module angularTsApp {
export interface IDeferedResolver{
  (...promises:(ng.IPromise<any>|any)[]):(Function);
}
export function deferedResolverFactory($q:ng.IQService) {
    return function(parent:any,...args:any[]){
      var callback;
      var promises:ng.IPromise<any>[] = [];
      for (var i = 0; i < args.length; ++i) {
        promises.push($q.when(args[i]));
      }
      $q.all(promises).then((resolvedPromises)=>{
        if(callback){
          callback.apply(parent, resolvedPromises);
        }
      });
      return (c)=>{
        callback = c;
      }
    }
  }
}

angular.module('angularTsApp')
  .factory('deferedResolver', angularTsApp.deferedResolverFactory);
