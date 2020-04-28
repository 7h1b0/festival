export type Festival = {
  id: number;
  rate: number;
  currency: string;
  name: string;
  year: number;
};

export const festivals: Festival[] = [
  {
    id: 1,
    name: 'Rock Werchter',
    currency: 'Voucher',
    year: 2019,
    rate: 2.75,
  },
  {
    id: 2,
    name: 'Tomorrowland',
    currency: 'Pearl',
    year: 2019,
    rate: 1.6,
  },
  {
    id: 3,
    name: 'Mysteryland',
    currency: 'Token',
    year: 2019,
    rate: 3,
  },
  {
    id: 4,
    name: 'Rock Werchter',
    currency: 'Token',
    year: 2021,
    rate: 2.75,
  },
];
