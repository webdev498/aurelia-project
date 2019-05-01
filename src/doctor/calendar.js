const instructionTexts = [
  '1. Start ...',
  '2. Open ...',
  '3. Work ...',
  '4. Close ...'
];

export class Calendar {

  constructor() {
    this.heading = 'Calendar Integration';
    this.subHeading = 'Instructions';
    this.intructions = instructionTexts;
  }

  googleCalendarClicked() {
    console.log('google button clicked');
  }

  openURLClicked() {
    console.log('url button clicked');
  }

}
