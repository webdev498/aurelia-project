import 'fullcalendar';
import 'fullcalendar-scheduler';

export class Home {
  constructor() {}
  attached() {
    $('#calendar').fullCalendar({
      now: '2018-04-07', //for demo only
      themeSystem: 'bootstrap4',
      bootstrapFontAwesome: {
        close: 'times',
        prev: 'angle-left',
        next: 'angle-right',
        nextYear: 'angle-double-right',
        prevYear: 'angle-double-left'
      },
      editable: true, // enable draggable events
      aspectRatio: 1.8,
      scrollTime: '00:00', // undo default 6am scrollTime
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'timelineDay,timelineThreeDays,agendaWeek,month,listWeek'
      },
      defaultView: 'timelineDay',
      views: {
        timelineThreeDays: {
          type: 'timeline',
          duration: {
            days: 3
          }
        }
      },
      resourceLabelText: 'Operating Rooms',
      resourceGroupField: 'building',
      resources: [{
        id: 'a',
        building: 'Ochsner Medical Center',
        title: 'Outpatient Room A'
      },
      {
        id: 'b',
        building: 'Ochsner Medical Center',
        title: 'Outpatient Room B',
        eventColor: 'green'
      },
      {
        id: 'c',
        building: 'Ochsner Medical Center',
        title: 'Outpatient Room C',
        eventColor: 'orange'
      },
      {
        id: 'd',
        building: 'Ochsner Medical Center',
        title: 'Outpatient Room D',
        children: [{
          id: 'd1',
          title: 'Room D1',
          occupancy: 10
        },
        {
          id: 'd2',
          title: 'Room D2',
          occupancy: 10
        }
        ]
      },
      {
        id: 'e',
        building: 'Ochsner Medical Center',
        title: 'Outpatient Room E'
      },
      {
        id: 'f',
        building: 'Ochsner Medical Center',
        title: 'Outpatient Room F',
        eventColor: 'red'
      },
      {
        id: 'g',
        building: 'Baton Rouge General',
        title: 'Outpatient Room G'
      },
      {
        id: 'h',
        building: 'Baton Rouge General',
        title: 'Outpatient Room H'
      },
      {
        id: 'i',
        building: 'Baton Rouge General',
        title: 'Outpatient Room I'
      },
      {
        id: 'j',
        building: 'Baton Rouge General',
        title: 'Outpatient Room J'
      },
      {
        id: 'k',
        building: 'Baton Rouge General',
        title: 'Outpatient Room K'
      },
      {
        id: 'l',
        building: 'Baton Rouge General',
        title: 'Outpatient Room L'
      },
      {
        id: 'm',
        building: 'Baton Rouge General',
        title: 'Outpatient Room M'
      },
      {
        id: 'n',
        building: 'Baton Rouge General',
        title: 'Outpatient Room N'
      }
      ],
      events: [{
        id: '1',
        resourceId: 'b',
        start: '2018-04-07T02:00:00',
        end: '2018-04-07T07:00:00',
        title: 'event 1'
      },
      {
        id: '2',
        resourceId: 'c',
        start: '2018-04-07T05:00:00',
        end: '2018-04-07T22:00:00',
        title: 'event 2'
      },
      {
        id: '3',
        resourceId: 'd',
        start: '2018-04-06',
        end: '2018-04-08',
        title: 'event 3'
      },
      {
        id: '4',
        resourceId: 'e',
        start: '2018-04-07T03:00:00',
        end: '2018-04-07T08:00:00',
        title: 'event 4'
      },
      {
        id: '5',
        resourceId: 'f',
        start: '2018-04-07T00:30:00',
        end: '2018-04-07T02:30:00',
        title: 'event 5'
      }
      ],
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
      //displayEventTime: false, // don't show the time column in list view

      // THIS KEY WON'T WORK IN PRODUCTION!!!
      // To make your own Google API key, follow the directions here:
      // http://fullcalendar.io/docs/google_calendar/
      //googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

      // US Holidays
      //events: 'en.usa#holiday@group.v.calendar.google.com',

      // eventClick: function(event) {
      // // opens events in a popup window
      // window.open(event.url, 'gcalevent', 'width=700,height=600');
      // return false;
      // }
    });
  }
}
