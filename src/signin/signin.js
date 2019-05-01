import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DataService} from 'common/dataService';
import {Global} from 'common/global';

@inject(DataService, Router, Global)
export class Signin {
  constructor(dataService, router, global) {
    this.dataService = dataService;
    this.router = router;
    this.global = global;
    this.username = '';
    this.password = '';
    this.impersonatum = '';
  }
  async signin() {
    let loginResp, userResp;
    try{
      loginResp = await this.dataService.login(this.username, this.password);
      if (loginResp.sessionId) {
        userResp = await this.dataService.currentUser();
        if (userResp.contact.contactId !== '00000000000000000000000000000000') {
          this.global.user = userResp.contact;
          this.global.user.authenticated = true;
          this.router.navigate('');
        }
      }
    } catch(e) {
      alert(e);
    }
  }
  forgotPassword() {
    //TODO: 
  }
}
