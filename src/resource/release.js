import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import {Prompt} from 'modal/prompt';

@inject(DialogService)
export class Release {
  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  attached() {
    let _this = this;
    $('#release-calendar').fullCalendar({
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      themeSystem: 'bootstrap4',
      bootstrapFontAwesome: {
        close: 'times',
        prev: 'angle-left',
        next: 'angle-right',
        nextYear: 'angle-double-right',
        prevYear: 'angle-double-left'
      },
      contentHeight: 'auto',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'listDay,listWeek,month'
      },

      // customize the button names,
      // otherwise they'd all just say "list"
      views: {
        listDay: { buttonText: 'list day' },
        listWeek: { buttonText: 'list week' }
      },
      // dayRender:function(data,cell){
      //   cell.append('<div class="row"><div class="col-xs-12 pull-xs-right"><div class="fa fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i>' + Math.floor(Math.random() * Math.floor(4)) + '</div></div></div>');
      // },
      defaultView: 'month',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          id: 3,
          title: 'Openings Available',
          allDay: true,
          start: '2018-12-13T00:00:00',
          end: '2018-12-13T00:00:00',
          className: 'bg-danger text-xs-center'
        },
        {
          id: 4,
          title: 'Ochsner Medical Center - OR 1',
          start: '2018-12-13T08:30:00',
          end: '2018-12-13T12:30:00',
          className: ''
        },
        {
          id: 5,
          title: 'Baton Rouge General - OR 3',
          start: '2018-12-15T08:30:00',
          end: '2018-12-15T12:30:00',
          className: ''
        },
        {
          id: 6,
          title: 'Baton Rouge General - OR 2',
          start: '2018-12-17T08:30:00',
          end: '2018-12-17T12:30:00',
          className: ''
        },
        {
          id: 7,
          title: 'Ochsner Medical Center - OR 1',
          start: '2018-12-17T14:30:00',
          end: '2018-12-17T17:30:00',
          className: ''
        }
      ],
      // eventRender: function(event, element) {
      //   element.find('td.fc-list-item-title').append('<span class="text-danger pull-xs-right m-l-2"><i class="fa fa-trash"></i></span>');
      // },
      eventClick: function(calEvent, jsEvent, view) {
        if ($(jsEvent.target).hasClass('fa-trash')) {
          let model = {
            header: 'Confirm Release',
            prompt: 'Are you sure you want to release this resource?',
            showCancel: true
          };
          _this.dialogService.open({ viewModel: Prompt, model: model, lock: false }).whenClosed(resp => {
            if (resp.output) {
              $('#release-calendar').fullCalendar('removeEvents', calEvent.id);
            }
            return false;
          });
        } else {
          //$(this).addClass('bg-white darken');
          return false;
        }
      }
    });
  }
}
