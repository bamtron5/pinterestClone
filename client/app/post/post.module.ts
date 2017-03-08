import * as angular from 'angular';
import {postDirective} from './post.directive';
// import './post.scss'; :( no bs vars)

export default angular.module('app.post', [])
  .directive('post', postDirective)
  .name;
