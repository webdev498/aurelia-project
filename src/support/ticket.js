import { Ticket } from '../models/Ticket';

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

export class SupportTicket {

  constructor() {
    this.heading = 'Create Support Ticket';

    this.myTickets = [];

    mockTicketData.forEach(ticketObj => {
      this.myTickets.push(new Ticket(ticketObj));
    });
  }

  attached() {
    
  }

}
