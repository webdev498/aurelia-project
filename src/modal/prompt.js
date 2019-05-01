import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class Prompt {
  constructor(controller) {
    this.model = {};
    this.controller = controller;
  }
  activate(model) {
    this.model = model;
  }
}
