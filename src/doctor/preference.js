import { PreferenceToggle } from '../models/PreferenceToggle';

const toggleValuesForPreferences = [
    'In app push notifications',
    'Text Message',
    'Email',
    'Phone call alert'
];

const toggleValuesForNotifications = [
  'Block release',
  'Block openings',
  'Block approval confirmation'
];

export class Preference {

  constructor() {
    this.headingPreferences = 'Notification Preferences';
    this.headingNotifications = 'Notification';
    this.togglesForPreferences = [];
    this.togglesForNotifications = [];

    toggleValuesForPreferences.forEach(value => {
      this.togglesForPreferences.push(new PreferenceToggle(value));  
    });

    toggleValuesForNotifications.forEach(value => {
      this.togglesForNotifications.push(new PreferenceToggle(value));  
    });
  }

}
