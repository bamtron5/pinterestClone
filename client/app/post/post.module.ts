import * as angular from 'angular';
import {postDirective} from './post.directive';
import controller from './post.controller';
// import './post.scss'; :( no bs vars)

export default angular.module('app.post', [])
  .directive('post', postDirective)
  .name;
