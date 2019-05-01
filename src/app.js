import '../js/pace';
import '../js/bootstrap';
import '../js/pixeladmin';
import './style.scss';
import {PLATFORM} from 'aurelia-pal';
import {Router, Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {DataService} from 'common/dataService';
import {Global} from 'common/global';

@inject(Router, Global, DataService)
export class App {
  constructor(router, global, dataService) {
    this.router = router;
    this.global = global;
    this.dataService = dataService;
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Open OR';
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      {
        route: 'signin',
        name: 'signin',
        moduleId: PLATFORM.moduleName('signin/signin'),
        title: 'Open OR - Sign In'
      },
      {
        route: 'schedule',
        name: 'schedule',
        moduleId: PLATFORM.moduleName('resource/schedule'),
        title: 'Schedule a Resource',
        settings: {
          auth: true
        }
      }, {
        route: 'request',
        name: 'request',
        moduleId: PLATFORM.moduleName('resource/request'),
        title: 'Request a Resource',
        settings: {
          auth: true
        }
      }, {
        route: 'preference',
        name: 'preference',
        moduleId: PLATFORM.moduleName('doctor/preference'),
        title: 'Preference',
        settings: {
          auth: true
        }
      }, {
        route: 'calendar',
        name: 'calendar',
        moduleId: PLATFORM.moduleName('doctor/calendar'),
        title: 'Calendar Integration',
        settings: {
          auth: true
        }
      }, {
        route: 'statistic',
        name: 'statistic',
        moduleId: PLATFORM.moduleName('report/statistic'),
        title: 'Doctor Statistics',
        settings: {
          auth: true
        }
      }, {
        route: 'facility',
        name: 'facility',
        moduleId: PLATFORM.moduleName('facility/settings'),
        title: 'Facility Settings',
        settings: {
          auth: true
        }
      }, {
        route: ['', 'release'],
        name: 'release',
        moduleId: PLATFORM.moduleName('resource/release'),
        title: 'Release a Resource',
        settings: {
          auth: true
        }
      }, {
        route: 'docadmin',
        name: 'docadmin',
        moduleId: PLATFORM.moduleName('admin/doctor'),
        title: 'Doctor Management',
        settings: {
          auth: true
        }
      }, {
        route: 'docdetail/:id',
        name: 'docdetail',
        moduleId: PLATFORM.moduleName('doctor/detail'),
        title: 'Doctor Detail',
        settings: {
          auth: true
        }
      }, {
        route: 'support-admin',
        name: 'supportadmin',
        moduleId: PLATFORM.moduleName('support/admin'),
        title: 'Support Ticket Admin',
        settings: {
          auth: true
        }
      }, {
        route: 'support-ticket',
        name: 'supportticket',
        moduleId: PLATFORM.moduleName('support/ticket'),
        title: 'Create Support Ticket',
        settings: {
          auth: true
        }
      }
    ]);
  }
  activate() {
    return this.dataService.currentUser().then(u => {
      if (u.Contact.ContactId > 0) { //TODO: swap for authentication id
        this.global.user = u.Contact;
        this.global.user.authenticated = true;
        return true;
      }
    })
    .catch(e => {
      this.global.user = {};
      return true;
    });
  }
  signout() {
    this.dataService.logout().then(resp =>{
      this.global.user = {};
      this.router.navigate('signin');
    });
  }
}

@inject(Global)
class AuthorizeStep {
  constructor(global) {
    this.global = global;
  }

  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
      if (this.global.isAuthenticated) {
        return next();
      }
      return next.cancel(new Redirect('signin'));
    }
    return next();
  }
}
