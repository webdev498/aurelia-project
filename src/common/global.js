import {inject, noView, computedFrom} from 'aurelia-framework';

@noView()
@inject()
export class Global {
  constructor() {
    this.user = {};
  }
  @computedFrom('user.authenticated')
  get isAuthenticated() {
    return this.user.authenticated;
  }
}
