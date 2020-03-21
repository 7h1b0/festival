/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // fix TS issues

import Drawer from './drawer';
import Context from '__factory__/context';

describe('Drawer', () => {
  const festival = {
    id: 1,
    name: 'Rock Werchter',
    currency: 'Voucher',
    year: 2019,
    rate: 2.75,
  };

  const festivals = [
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
  ];

  it('should allow user to choose between festivals', () => {
    const mockedDispatch = jest.fn();
    const closeDrawer = jest.fn();
    const { getByText } = render(
      <Context
        festivals={festivals}
        festival={festival}
        dispatch={mockedDispatch}
      >
        <Drawer onClose={closeDrawer} />
      </Context>,
    );

    expect(getByText('Rock Werchter 2019')).toBeVisible();
    expect(getByText('Tomorrowland 2019')).toBeVisible();

    fireEvent.click(getByText('Tomorrowland 2019'));
    expect(mockedDispatch).toHaveBeenCalledWith(2);
    expect(closeDrawer).toHaveBeenCalledTimes(1);
  });
});
