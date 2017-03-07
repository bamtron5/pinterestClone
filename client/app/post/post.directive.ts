import * as angular from 'angular';
// main.js

// var msnry = new Masonry( '.grid', {
//   // options...
// });

export const postDirective = function postDirective () {
  return {
    restrict: 'A',
    templateUrl: '/client/app/post/post.html',
    link: (scope, element, attrs) => {
      //
    }
  };
};
