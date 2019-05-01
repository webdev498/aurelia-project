import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {Router} from 'aurelia-router';
import moment from 'moment';
import {Confirm} from 'modal/confirm';
import * as Toastr from 'toastr';

@inject(Router, DialogService)
export class Schedule {
  constructor(router, dialogService) {
    this.router = router;
    this.dialogService = dialogService;
    this.blockSize = '';
    this.dates = null;
    this.slots = null;
    this.today = null;
  }
  created() {
    console.log('created');
    this.blockSize = '2';
    this.dates = [];
    this.slots = [];
    this.today = moment();
    
    let now = moment();
    let sunday = now.day(0);
    for (let i = 0; i < 7; i++) {
      this.dates.push(moment(sunday).add(i, 'days'));
      let slot = {
        resources: [],
        times: []
      };
      switch (i) {
      case 0:
        slot.times.push('6 AM');
        slot.times.push('8 AM');
        break;
      case 1:
        slot.times.push('8 AM');
        slot.times.push('10 AM');
        break;
      case 2:
        slot.times.push('10 AM');
        slot.times.push('12 PM');
        break;
      case 3:
        slot.times.push('12 PM');
        slot.times.push('2 PM');
        break;
      case 4:
        slot.times.push('2 PM');
        slot.times.push('4 PM');
        break;
      case 5:
        slot.times.push('4 PM');
        slot.times.push('6 PM');
        break;
      case 6:
        slot.times.push('6 PM');
        slot.times.push('8 PM');
        break;
      default:
        break;
      }
      for (let t = 0; t < 7; t++) {
        slot.resources.push(Math.floor(Math.random() * Math.floor(4)));
      }
      this.slots.push(slot);
    }
  }
  attached() {
    console.log('attached');
  }
  nextWeek() {
    let lastDay = this.dates[6];
    this.dates.splice(0, 7);
    this.slots.splice(0, 7);
    for (let i = 1; i < 8; i++) {
      this.dates.push(moment(lastDay).add(i, 'days'));
      let slot = {
        resources: [],
        times: []
      };
      switch (i) {
      case 1:
        slot.times.push('6 AM');
        slot.times.push('8 AM');
        break;
      case 2:
        slot.times.push('8 AM');
        slot.times.push('10 AM');
        break;
      case 3:
        slot.times.push('10 AM');
        slot.times.push('12 PM');
        break;
      case 4:
        slot.times.push('12 PM');
        slot.times.push('2 PM');
        break;
      case 5:
        slot.times.push('2 PM');
        slot.times.push('4 PM');
        break;
      case 6:
        slot.times.push('4 PM');
        slot.times.push('6 PM');
        break;
      case 7:
        slot.times.push('6 PM');
        slot.times.push('8 PM');
        break;
      default:
        break;
      }
      for (let t = 0; t < 7; t++) {
        slot.resources.push(Math.floor(Math.random() * Math.floor(4)));
      }
      if (i === 1) {
        this.slots.push(slot);
      }
    }
  }
  previousWeek() {
    let firstDay = this.dates[0];
    this.dates.splice(0, 7);
    this.slots.splice(0, 7);
    for (let i = 7; i--;) {
      this.dates.push(moment(firstDay).subtract(i + 1, 'days'));
      let slot = {
        resources: [],
        times: []
      };
      switch (i) {
      case 1:
        slot.times.push('6 AM');
        slot.times.push('8 AM');
        break;
      case 2:
        slot.times.push('8 AM');
        slot.times.push('10 AM');
        break;
      case 3:
        slot.times.push('10 AM');
        slot.times.push('12 PM');
        break;
      case 4:
        slot.times.push('12 PM');
        slot.times.push('2 PM');
        break;
      case 5:
        slot.times.push('2 PM');
        slot.times.push('4 PM');
        break;
      case 6:
        slot.times.push('4 PM');
        slot.times.push('6 PM');
        break;
      case 7:
        slot.times.push('6 PM');
        slot.times.push('8 PM');
        break;
      default:
        break;
      }
      for (let t = 0; t < 7; t++) {
        slot.resources.push(Math.floor(Math.random() * Math.floor(4)));
      }
      if (i === 0) {
        this.slots.push(slot);
      }
    }
  }
  requestResource(idxDay, numResources) {
    if (numResources > 0) {
      let day = this.dates[idxDay];
      let model = {
        header: 'Confirm Resource Request',
        day: day,
        times: [],
        numResources: numResources
      };
      for (let i = 0; i < numResources; i++) {
        model.times.push(this.slots[i].times[0] + ' to ' + this.slots[i].times[1]);
      }
      this.dialogService.open({ viewModel: Confirm, model: model, lock: false }).whenClosed(resp => {
        if (resp.output) {
          Toastr.success('Your request has been successfully submitted!');
        }
      });
    }
  }
}
