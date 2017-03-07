import * as angular from 'angular';

const name = 'newPost';
const template = '/client/app/newPost/newPost.html';

class NewPost {
  public post;
  public user;
  public onSuccess;
  constructor (
    private PostService,
    private SessionService,
    private toastr,
    private $scope
  ) {
    this.user = SessionService.getUser();
    this.post = {
      owner: this.setOwner().username,
      date: new Date()
    };
  }

  public newPost () {
    this.PostService.createPost(this.post)
      .then((result) => {
        this.onSuccess({post: this.post});
        this.toastr.success('We have created your pin', 'Cool');
      }).catch(() => {
        this.toastr.warning('Failed post', 'Sorry');
      });
  }

  public setOwner () {
    return this.SessionService.getUser() || this.toastr.info('Please authenticate', `<a class="btn btn-info" ur-sref="auth">LOGIN/SIGNUP</a>`);
  }
}

NewPost.$inject = [
  'PostService',
  'SessionService',
  'toastr',
  '$scope'
];

export default angular.module('app.components.newPost', [])
  .component(name, {
    templateUrl: template,
    controller: NewPost,
    controllerAs: 'vm',
    bindings: {
      onSuccess: '&'
    }
  })
  .name;
