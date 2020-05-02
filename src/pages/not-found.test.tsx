/** @jsx h */
import { h } from 'preact';
import { render } from '@testing-library/preact';

import * as preferences from 'modules/preferences';
import NotFound from './not-found';

describe('NotFound', () => {
  it('should display a link to return home', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('Return home')).toHaveProperty(
      'href',
      'https://festival-converter.app/',
    );
  });

  it('should delete lastUsedFestival key', () => {
    const spy = jest.spyOn(preferences, 'removeLastUsed');
    render(<NotFound />);
    expect(spy).toHaveBeenCalled();
  });
});
