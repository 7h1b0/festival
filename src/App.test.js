import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  afterEach(cleanup);

  it('should render Hello Word', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World')).toBeDefined();
  });
});
