import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Actions from '../Actions';

describe('Actions', () => {
  it('should render correctly', () => {
    const handleDelete = jest.fn();
    const handleDefault = jest.fn();
    const { getByText } = render(
      <Actions onDelete={handleDelete} onDefault={handleDefault} />,
    );

    fireEvent.click(getByText('Set as default'));
    expect(handleDefault).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText('Remove'));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
