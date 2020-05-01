export type Festival = {
  id: number;
  rate: number;
  currency: string;
  name: string;
};

export const festivals: Festival[] = [
  {
    id: 1,
    name: 'Rock Werchter 2019',
    currency: 'Voucher',
    rate: 2.75,
  },
  {
    id: 2,
    name: 'Tomorrowland 2019',
    currency: 'Pearl',
    rate: 1.6,
  },
  {
    id: 3,
    name: 'Mysteryland 2019',
    currency: 'Token',
    rate: 3,
  },
  {
    id: 4,
    name: 'Rock Werchter 2021',
    currency: 'Token',
    rate: 2.75,
  },
];
