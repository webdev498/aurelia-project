import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DataService} from 'common/dataService';
import {Global} from 'common/global';

@inject(DataService, Router, Global)
export class DoctorDetail {
  constructor(dataService, router, global) {
    this.router = router;
    this.dataService = dataService;
    this.global = global;

    this.contactId = '';
    this.name = '';
    this.phone = '';
    this.email = '';
    this.day = '';
    this.isFastPass = '';

    
  }
  activate(id) {
    console.log('DoctorDetail: ' + id);

    if(id) {
      this.contactId = id;
      this.getDoctorDetail(id);
    }
  }

  onClickSave() {
    let contactObj = {
      contact: {
        userId: this.global.user.userId,
        firstName: this.name.split(' ')[0],
        lastName: this.name.split(' ')[1],
        emailPersonal: this.email,
        emailWork: this.email,
        phone: this.phone
      }
    };

    if(this.contactId.length > 0) {
      updateDoctorDetail(contactObj);
    }
    else {
      this.createDoctorDetail(contactObj);
    }
  }

  async getDoctorDetail(id) {
    let contactResp;
    try{
      contactResp = await this.dataService.getContactRequest(id);
      if (contactResp.contact.contactId !== '00000000000000000000000000000000') {
        this.name = contactResp.contact.firstName + contactResp.contact.lastName;
        this.phone = contactResp.contact.phone;
        this.email = contactResp.contact.emailPersonal ? contactResp.contact.emailPersonal : contactResp.contact.emailWork;
      }
    } catch(e) {
      alert(e);
    }
  }

  async updateDoctorDetail(contactObj) {
    let contactResp;
    try{
      contactResp = await this.dataService.updateContactRequest(this.contactId, contactObj);
      if (contactResp.contact.contactId !== '00000000000000000000000000000000') {
        alert('Successfully Updated');
      }
    } catch(e) {
      alert(e);
    }
  }

  async createDoctorDetail(contactObj) {
    let contactResp;
    try{
      contactResp = await this.dataService.createContactRequest(contactObj);
      if (contactResp.contact.contactId !== '00000000000000000000000000000000') {
        alert('Successfully Created');
      }
    } catch(e) {
      alert(e);
    }
  }
}
