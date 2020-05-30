/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // fix TS issues

import Drawer from './drawer';

const defaultSelectedFestivalSlug = 'rock-werchter';
jest.mock('festivals.ts', () => ({
  festivals: [
    {
      slug: 'rock-werchter',
      name: 'Rock Werchter 2019',
      currency: 'Voucher',
      rate: 2.75,
    },
    {
      slug: 'tomorrowland',
      name: 'Tomorrowland 2019',
      currency: 'Pearl',
      rate: 1.6,
    },
  ],
}));

describe('Drawer', () => {
  it('should display all festivals when drawer is open', async () => {
    const { getByText } = render(
      <Drawer
        onClose={jest.fn()}
        open={true}
        selectedFestivalSlug={defaultSelectedFestivalSlug}
      />,
    );

    expect(getByText('Rock Werchter 2019')).toBeVisible();
    expect(getByText('Rock Werchter 2019')).toHaveProperty(
      'href',
      'https://festival-converter.app/rock-werchter',
    );

    expect(getByText('Tomorrowland 2019')).toBeVisible();
    expect(getByText('Tomorrowland 2019')).toHaveProperty(
      'href',
      'https://festival-converter.app/tomorrowland',
    );
  });

  it('should return nothing when drawer is closed', async () => {
    const { container } = render(
      <Drawer
        onClose={jest.fn()}
        open={false}
        selectedFestivalSlug={defaultSelectedFestivalSlug}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should call onClose callback on close', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Drawer
        onClose={handleClose}
        open={true}
        selectedFestivalSlug={defaultSelectedFestivalSlug}
      />,
    );

    fireEvent.click(getByLabelText('Close'));
    expect(handleClose).toHaveBeenCalled();
  });
});
