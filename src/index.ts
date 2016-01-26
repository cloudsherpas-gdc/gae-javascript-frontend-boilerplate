import * as angular from 'angular';

let ngModule = angular.module('app', []);
ngModule.run(() => console.log("Hello World!"));

angular.bootstrap(document, ['app']);
