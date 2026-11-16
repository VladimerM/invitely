import { RsvpResponse } from '../models/rsvp';

/** Sample guest list shown on the host dashboard demo. */
export const SAMPLE_RSVP_RESPONSES: readonly RsvpResponse[] = [
  {
    id: 1,
    name: 'Nino & Giorgi Beridze',
    attending: true,
    guests: 2,
    note: 'Can’t wait!',
    receivedLabel: '2 hours ago',
  },
  {
    id: 2,
    name: 'Ana Kapanadze',
    attending: true,
    guests: 1,
    note: '',
    receivedLabel: '5 hours ago',
  },
  {
    id: 3,
    name: 'Luka Tsiklauri',
    attending: false,
    guests: 0,
    note: 'Abroad that week — sending love',
    receivedLabel: 'Yesterday',
  },
  {
    id: 4,
    name: 'Mariam Lomidze',
    attending: true,
    guests: 3,
    note: 'One vegetarian',
    receivedLabel: 'Yesterday',
  },
  {
    id: 5,
    name: 'Davit Gelashvili',
    attending: true,
    guests: 2,
    note: '',
    receivedLabel: '2 days ago',
  },
];
