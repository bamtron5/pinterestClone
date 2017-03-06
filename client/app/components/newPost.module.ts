import * as angular from 'angular';

const name = 'newPost';
const template = '/client/app/components/newPost.html';

class NewPost {
  public post;
  public user;
  constructor (
    private PostService,
    private SessionService,
    private toastr
  ) {
    this.user = SessionService.getUser();
  }

  public newPost () {
    this.post.owner = this.user.username;
    this.PostService.createPost(this.post)
      .then((result) => {
        this.toastr.success('We have created your pin', 'Cool');
      }).catch(() => {
        this.toastr.warning('Failed post', 'Sorry');
      });
  }
}

NewPost.$inject = ['PostService', 'SessionService', 'toastr'];

export default angular.module('app.components.newPost', [])
  .component(name, {
    templateUrl: template,
    controller: NewPost,
    controllerAs: 'vm'
  })
  .name;
