import React from 'react';
import { render } from '@testing-library/react';

import Rate from './rate';

describe('Rate', () => {
  it('should render correctly', () => {
    const { queryByText } = render(
      <Rate rate={2} origin="Jest" target="React" />,
    );

    expect(queryByText('1 Jest = 2 React')).toBeVisible();
  });

  it('should supports custom amount', () => {
    const { queryByText } = render(
      <Rate rate={2} origin="Jest" target="React" amount={2} />,
    );

    expect(queryByText('2 Jest = 4 React')).toBeVisible();
  });

  it('should format nicely', () => {
    const { queryByText } = render(
      <Rate rate={1 / 3} origin="Jest" target="React" amount={1} />,
    );

    expect(queryByText('1 Jest = 0.33 React')).toBeVisible();
  });
});