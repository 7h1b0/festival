import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BottomButton from './BottomButton';
import { ShareIcon } from './icons';

describe('BottomButton', () => {
  it('should render correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <BottomButton
        onClick={handleClick}
        label={'test'}
        icon={<ShareIcon />}
      />,
    );

    fireEvent.click(getByText('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
