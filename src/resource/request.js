import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DialogService} from 'aurelia-dialog';
import {DataService} from 'common/dataService';
import {Prompt} from 'modal/prompt';
import moment from 'moment';

@inject(DataService, Router, DialogService)
export class Request {
  constructor(dataService, router, dialogService) {
    this.dialogService = dialogService;
    this.router = router;
    this.dataService = dataService;
    this.times = '';
    this.day = '';
    this.resourceCount = 0;
  }
  activate(params) {
    this.times = params.times;
    this.day = moment(params.day, 'MM-DD-YYYY');
    this.resourceCount = params.count;
  }
  submit() {
    let model = {
      header: 'Thank you!',
      prompt: 'Your request is currently being processed.',
      showCancel: false
    };
    this.dialogService.open({ viewModel: Prompt, model: model, lock: false }).whenClosed(resp => {
      this.router.navigateBack();
    });
  }
  cancel() {
    this.router.navigateBack();
  }
}
