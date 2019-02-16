import React from 'react';
import { render } from 'react-testing-library';
import Rate from '../Rate';

describe('Rate', () => {
  it('should render correctly', () => {
    const { queryByText } = render(
      <Rate rate={2} origin="Jest" target="React" />,
    );

    expect(queryByText('1 Jest = 2 React')).toBeTruthy();
  });

  it('should supports custom amount', () => {
    const { queryByText } = render(
      <Rate rate={2} origin="Jest" target="React" amount={2} />,
    );

    expect(queryByText('2 Jest = 4 React')).toBeTruthy();
  });

  it('should format nicely', () => {
    const { queryByText } = render(
      <Rate rate={1 / 3} origin="Jest" target="React" amount={1} />,
    );

    expect(queryByText('1 Jest = 0.33 React')).toBeTruthy();
  });
});
