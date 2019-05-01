import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class TicketModal {
  constructor(controller) {
    this.ticket = {};
    this.controller = controller;
  }
  activate(model) {
    this.ticket = model;

    console.log(this.ticket);
  }
}
