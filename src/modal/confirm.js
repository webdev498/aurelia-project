import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class Confirm {
  constructor(controller) {
    this.model = {};
    this.hasSelection = false;
    this.controller = controller;
  }
  activate(model) {
    this.model = model;
  }
  selectResource(el) {
    for (let item of el.target.parentNode.children) {
      item.className = item.className.replace('active', '');
    }
    el.target.className += ' active';
    this.hasSelection = true;
  }
}
