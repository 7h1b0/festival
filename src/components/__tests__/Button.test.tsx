import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick} uiStyle="flat">
        Hey!
      </Button>,
    );

    fireEvent.click(getByText('Hey!'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
