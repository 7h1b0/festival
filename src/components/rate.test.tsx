/** @jsx h */
import { h } from 'preact';
import { render } from '@testing-library/preact';

import Rate from './rate';

describe('Rate', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Rate rate={2} source="Jest" target="React" />,
    );

    expect(getByText('1 Jest = 2 React')).toBeVisible();
  });

  it('should format nicely', () => {
    const { getByText } = render(
      <Rate rate={1 / 3} source="Jest" target="React" />,
    );

    expect(getByText('1 Jest = 0.33 React')).toBeVisible();
  });
});
