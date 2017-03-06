import * as angular from 'angular';

export class PostServiceC {
  public UserResource;

  constructor(
    private $resource: ng.resource.IResourceService
  ) {
    this.UserResource = $resource('/api/post/:id');
  }

  public createPost (post) {
    return this.UserResource.save(post).$promise;
  }

  public getPosts () {
    return this.UserResource.query().$promise;
  }
}

PostServiceC.$inject = ['$resource'];

export const PostServiceModule = angular.module('app.services.post', [])
  .service('PostService', PostServiceC)
  .name;
