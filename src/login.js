import '../js/pace';
import '../js/bootstrap';
import '../js/pixeladmin';
import './style.scss';
import {PLATFORM} from 'aurelia-pal';

export class Login {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Open OR';
    config.map([
      { route: ['','signin'],       name: 'signin',    moduleId: PLATFORM.moduleName('signin/signin'),    title: 'Open OR - Sign In' },
      { route: 'signup',    name: 'signup', moduleId: PLATFORM.moduleName('sigin/register'),  title: 'Open OR - Register' }
    ]);
  }
}
