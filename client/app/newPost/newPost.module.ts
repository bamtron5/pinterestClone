import * as angular from 'angular';
import controller from './newPost.controller';

const name = 'newPost';
const template = '/client/app/newPost/newPost.html';

export default angular.module('app.components.newPost', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm',
    bindings: {
      onSuccess: '&'
    }
  })
  .name;
