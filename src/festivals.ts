export type Festival = {
  slug: string;
  rate: number;
  currency: string;
  name: string;
};

export const festivals: Festival[] = [
  {
    slug: 'rock-werchter-2019',
    name: 'Rock Werchter 2019',
    currency: 'Voucher',
    rate: 2.75,
  },
  {
    slug: 'tomorrowland-2019',
    name: 'Tomorrowland 2019',
    currency: 'Pearl',
    rate: 1.6,
  },
  {
    slug: 'mysteryland-2019',
    name: 'Mysteryland 2019',
    currency: 'Token',
    rate: 3,
  },
  {
    slug: 'rock-werchter-2021',
    name: 'Rock Werchter 2021',
    currency: 'Token',
    rate: 2.75,
  },
];
