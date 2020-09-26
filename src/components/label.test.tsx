/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';

import Label from './label';

describe('Label', () => {
  it('should render correctly', () => {
    render(<Label htmlFor="test" rate={2} source="Jest" target="React" />);
    expect(screen.getByText('1 Jest = 2 React')).toBeVisible();
  });

  it('should format nicely', () => {
    render(<Label htmlFor="test" rate={1 / 3} source="Jest" target="React" />);
    expect(screen.getByText('1 Jest = 0.33 React')).toBeVisible();
  });
});
