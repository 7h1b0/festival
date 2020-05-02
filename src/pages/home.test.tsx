/** @jsx h */
import { h } from 'preact';
import { route } from 'preact-router';
import { render } from '@testing-library/preact';

import Home from './home';

jest.mock('festivals.ts', () => ({
  festivals: [
    {
      slug: 'js-festival-2019',
      name: 'JS Festival 2019',
      currency: 'Closure',
      rate: 3,
    },
  ],
}));

jest.mock('preact-router', () => ({
  route: jest.fn(),
}));

describe('Home', () => {
  it('should display the festival according to the slug', () => {
    const { getByText } = render(<Home slug="js-festival-2019" />);
    expect(getByText('JS Festival 2019')).toBeVisible();
  });

  it('should redirect to the Not Found page when slug is unknow', () => {
    const { container } = render(<Home slug="unknow" />);
    expect(container).toBeEmpty();
    expect(route).toHaveBeenCalledWith('/404', true);
  });
});
