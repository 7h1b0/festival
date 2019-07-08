import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GetStarted from './GetStarted';

it('should render correctly and call handleShow on click', () => {
  const handleShow = jest.fn();
  const { getByText, queryByText } = render(
    <GetStarted showForm={handleShow} />,
  );

  expect(queryByText('Get started by adding a currency')).toBeTruthy();
  fireEvent.click(getByText('Add Currency'));
  expect(handleShow).toHaveBeenCalledTimes(1);
});
