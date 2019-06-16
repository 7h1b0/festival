import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Actions from '../Actions';

describe('Actions', () => {
  it('should render correctly', () => {
    const handleDelete = jest.fn();
    const { getByText } = render(<Actions onDelete={handleDelete} />);

    fireEvent.click(getByText('Remove'));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
