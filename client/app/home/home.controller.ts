import {SessionServiceClass} from '../services/session.service';

class HomeController {
  public title: string = 'Home Page';
  public user;
  constructor(
    private SessionService: SessionServiceClass
  ) {
    this.user = SessionService.getUser();
  }
}

HomeController.$inject = [
  'SessionService'
];

export default HomeController;
