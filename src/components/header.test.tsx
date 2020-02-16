import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';
import { FestivalStateContext } from 'context/festival-context';

describe('Header', () => {
  const festival = {
    id: 1,
    name: 'Rock Werchter',
    currency: 'Voucher',
    year: 2019,
    rate: 2.75,
  };

  it('should display the festival name', () => {
    const { queryByText } = render(
      <FestivalStateContext.Provider value={festival}>
        <Header openDrawer={jest.fn} />
      </FestivalStateContext.Provider>,
    );

    expect(queryByText('Rock Werchter 2019')).toBeVisible();
  });
});
