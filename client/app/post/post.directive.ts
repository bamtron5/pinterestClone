import * as angular from 'angular';

export const postDirective = function postDirective () {
  return {
    restrict: 'A',
    templateUrl: '/client/app/post/post.html',
    link: (scope, element, attrs) => {
      //
    }
  };
};
