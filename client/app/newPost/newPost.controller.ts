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
    return this.SessionService.getUser() || {username: 'UNAUTH'};
  }
}

NewPost.$inject = [
  'PostService',
  'SessionService',
  'toastr',
  '$scope'
];

export default NewPost;
