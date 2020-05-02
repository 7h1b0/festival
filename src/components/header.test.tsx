/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import Header from './header';

describe('Header', () => {
  it('should display the festival name', () => {
    const { getByText } = render(
      <Header openDrawer={jest.fn} title="Rock Werchter 2019" />,
    );

    expect(getByText('Rock Werchter 2019')).toBeVisible();
  });

  it('should call openDrawer callback when user click on menu', () => {
    const handleDrawer = jest.fn();
    const { getByLabelText } = render(
      <Header openDrawer={handleDrawer} title="Rock Werchter 2019" />,
    );

    fireEvent.click(getByLabelText('menu'));
    expect(handleDrawer).toHaveBeenCalled();
  });
});
