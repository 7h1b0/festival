/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // fix TS issues

import Drawer from './drawer';
import Context from '__factory__/context';

describe('Drawer', () => {
  const festivals = [
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
  ];

  it('should display all festivals when drawer if open', async () => {
    const { getByText } = render(
      <Context festivals={festivals}>
        <Drawer
          onClose={jest.fn()}
          open={true}
          selectedFestivalSlug={festivals[0].slug}
        />
      </Context>,
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
      <Context festivals={festivals}>
        <Drawer
          onClose={jest.fn()}
          open={false}
          selectedFestivalSlug={festivals[0].slug}
        />
      </Context>,
    );

    expect(container).toBeEmpty();
  });

  it('should call onClose callback on close', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Context festivals={festivals}>
        <Drawer
          onClose={handleClose}
          open={true}
          selectedFestivalSlug={festivals[0].slug}
        />
      </Context>,
    );

    fireEvent.click(getByLabelText('Close'));
    expect(handleClose).toHaveBeenCalled();
  });
});
