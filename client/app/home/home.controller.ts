import {SessionServiceClass} from '../services/session.service';
import {PostServiceC} from '../services/post.service';

class HomeController {
  public title: string = 'Home Page';
  public user;
  public posts;
  constructor(
    private SessionService: SessionServiceClass,
    private PostService: PostServiceC,
    private toastr
  ) {
    this.user = SessionService.getUser();
    this.getPosts();
  }

  public getPosts () {
    this.PostService.getPosts()
      .then((posts) => {
        this.posts = posts;
      }).catch((e) => {
        console.log(e);
        this.toastr.error('Post retrieval failed', ':(');
      });
  }
}

HomeController.$inject = [
  'SessionService',
  'PostService',
  'toastr'
];

export default HomeController;
