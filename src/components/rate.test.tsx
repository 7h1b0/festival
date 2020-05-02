/** @jsx h */
import { h } from 'preact';
import { render } from '@testing-library/preact';

import Rate from './rate';

describe('Rate', () => {
  it('should render correctly', () => {
    const { queryByText } = render(
      <Rate rate={2} origin="Jest" target="React" />,
    );

    expect(queryByText('1 Jest = 2 React')).toBeVisible();
  });

  it('should format nicely', () => {
    const { queryByText } = render(
      <Rate rate={1 / 3} origin="Jest" target="React" />,
    );

    expect(queryByText('1 Jest = 0.33 React')).toBeVisible();
  });
});
