import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { navigate } from '@reach/router';

import GetStarted from './GetStarted';

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

it('should render correctly and call handleShow on click', () => {
  const { getByText, queryByText } = render(<GetStarted />);

  expect(queryByText('Get started by adding a currency')).toBeTruthy();
  fireEvent.click(getByText('Add Currency'));

  expect(navigate).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledWith('/add');
});
