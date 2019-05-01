export class Ticket {
  constructor({id, createdDate, type, agent, issue, resolution, closedDate, status}) {
    this.id = id;
    this.created_date = createdDate;
    this.type = type;
    this.agent = agent;
    this.issue = issue;
    this.resolution = resolution;
    this.closed_date = closedDate;
    this.status = status;
  }
}
