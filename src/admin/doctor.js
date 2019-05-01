import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DataService} from 'common/dataService';

import dt from 'datatables.net-bs';

@inject(DataService, Router)
export class DoctorAdmin {
  constructor(dataService, router) {
    this.router = router;
    this.dataService = dataService;
  }
  activate() {
    console.log('DoctorAdmin activate');
  }
  attached() {
    console.log('DoctorAdmin attached');
    $('#datatables').dataTable({
      'sDom': "<'table-header clearfix'<'row'<'col-lg-6'l><'col-lg-6'<B><'pull-right'<f>>>>>t<'table-footer clearfix'<'row'<'col-lg-6'<'DT-label'i>><'col-lg-6'<'DT-pagination'p>>>>"
    });
  }
  viewDetails(id) {
    this.router.navigate('docdetail/' + id);
  }
}
