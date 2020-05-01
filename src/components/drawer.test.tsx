/** @jsx h */
import { h } from 'preact';
import Router from 'preact-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // fix TS issues

import Drawer from './drawer';
import Context from '__factory__/context';

describe('Drawer', () => {
  const festivals = [
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
  ];

  xit('should allow user to choose between festivals', async () => {
    const closeDrawer = jest.fn();
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router history={history} url="/">
        <Context festivals={festivals}>
          <Drawer
            onClose={closeDrawer}
            open={true}
            selectedFestivalId={festivals[0].id}
          />
        </Context>
      </Router>,
    );

    expect(getByText('Rock Werchter 2019')).toBeVisible();
    expect(getByText('Tomorrowland 2019')).toBeVisible();

    fireEvent.click(getByText('Tomorrowland 2019'));
    expect(closeDrawer).toHaveBeenCalledTimes(1);

    console.log(history.location);
    // await wait(() => expect(window.location.pathname).toBe('/2'));
    // console.log(window.location.pathname, window.location.href);
    // expect(mockedDispatch).toHaveBeenCalledWith(2);
  });
});
