var angular = require('angular');

var ngModule = angular.module('app', []);
ngModule.run(() => console.log("Hello World!"));

angular.bootstrap(document, ['app']);
