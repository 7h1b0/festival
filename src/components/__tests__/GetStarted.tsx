import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import GetStarted from '../GetStarted';

describe('GetStarted', () => {
  it('should render correctly', () => {
    const handleShow = jest.fn();
    const { getByText, queryByText } = render(
      <GetStarted showForm={handleShow} />,
    );

    expect(queryByText('Get started by adding a currency')).toBeTruthy();
    fireEvent.click(getByText('Add Currency'));
    expect(handleShow).toHaveBeenCalledTimes(1);
  });
});
