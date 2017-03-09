import * as Masonry from 'masonry-layout';
import {SessionServiceClass} from '../services/session.service';
import {PostServiceC} from '../services/post.service';

class HomeController {
  public title: string = 'Home Page';
  public user;
  public posts;
  public done = false;
  constructor(
    private SessionService: SessionServiceClass,
    private PostService: PostServiceC,
    private toastr,
    private $timeout
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

  public startMasonry () {
    this.$timeout(() => {
      let elem = document.querySelector('.grid');
      let msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: 225
      });
      this.done = true;
    }, 1500);
  }

  public newPost (post) {
    this.posts.unshift(post);
    // closeModal
  }
}

HomeController.$inject = [
  'SessionService',
  'PostService',
  'toastr',
  '$timeout'
];

export default HomeController;
