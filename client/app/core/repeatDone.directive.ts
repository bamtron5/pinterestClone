import * as angular from 'angular';

const repeatDone = ['$parse', function repeatDone ($parse) {
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {
      if (scope.$last) {
        scope.$eval(attrs.repeatDone);
      }
    }
  };
}];

export default angular.module('app.directives.repeatDone', [])
  .directive('repeatDone', repeatDone)
  .name;
