/** @jsx h */
import { h } from 'preact';
import { render } from '@testing-library/preact';

import Header from './header';

describe('Header', () => {
  it('should display the festival name', () => {
    const { queryByText } = render(
      <Header openDrawer={jest.fn} title="Rock Werchter 2019" />,
    );

    expect(queryByText('Rock Werchter 2019')).toBeVisible();
  });
});
