
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export class FacilitySettings {

  constructor() {
    this.heading = 'Facility Settings';
    this.days = days;
  }

  attached() {
    $('#availability-datepicker-range').datepicker();
  }

}
