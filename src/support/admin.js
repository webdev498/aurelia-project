
import { Ticket } from '../models/Ticket';
import { inject } from 'aurelia-framework';
import { DialogService } from 'aurelia-dialog';
import { TicketModal } from 'modal/ticket';

const mockTicketData = [
  {
    id: 1,
    createdDate: '12/05/2018',
    type: 'New Business',
    agent: 'Patrica Harper',
    issue: 'Please create a row for new client. Thanks!',
    resolution: 'Already have a support ticket for this.',
    closedDate: '12/07/2018',
    status: 1
  },
  {
    id: 2,
    createdDate: '12/05/2018',
    type: 'New Business',
    agent: 'Patrica Harper',
    issue: 'Please create a row for new client. Thanks!',
    resolution: 'Already have a support ticket for this.',
    closedDate: '12/07/2018',
    status: 1
  },
  {
    id: 3,
    createdDate: '12/05/2018',
    type: 'New Business',
    agent: 'Patrica Harper',
    issue: 'Please create a row for new client. Thanks!',
    resolution: 'Already have a support ticket for this.',
    closedDate: '12/07/2018',
    status: 0
  },
  {
    id: 4,
    createdDate: '12/05/2018',
    type: 'New Business',
    agent: 'Patrica Harper',
    issue: 'Please create a row for new client. Thanks!',
    resolution: 'Already have a support ticket for this.',
    closedDate: '12/07/2018',
    status: 0
  }
];

@inject(DialogService)
export class SupportAdmin {

  constructor(dialogService) {
    this.dialogService = dialogService;
    this.heading = 'Support Ticket Admin';

    this.openTickets = [];
    this.closedTickets = [];

    mockTicketData.forEach(ticketObj => {
      if (ticketObj.status === 1) {
        this.openTickets.push(new Ticket(ticketObj));
      } else {
        this.closedTickets.push(new Ticket(ticketObj));
      }
    });

  }

  editTicket(ticket) {
    console.log("before sending : ", ticket);
    this.dialogService.open({ viewModel: TicketModal, model: ticket, lock: false }).whenClosed(resp => {
      if (resp.output) {
        $('#release-calendar').fullCalendar('removeEvents', calEvent.id);
      }
      return false;
    });
  }

}
