import { StatisticObj } from '../models/statistic';

const statisticTexts = [
  'Blocks claimed and used',
  'Blocks claimed and released',
  'Blocks released and claimed by another doctor',
  'Blocks released but not used',
  'Released blocks claimed and used',
  'Released blocks claimed and not used',
  'Average Lead Time'
];

const doctorNames = [
  'Donald',
  'John',
  'Tom'
];

export class Statistic {

  constructor() {
    this.heading = 'Doctor Statistics';
    this.statistics = [];
    this.doctors = doctorNames;


    statisticTexts.forEach(value => {
      this.statistics.push(new StatisticObj(value));
    });
  }

  attached() {
    $("#statistic-datepicker-range").datepicker();
  }

}
