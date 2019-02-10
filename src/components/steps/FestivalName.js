import React from 'react';
import Input from 'components/Input';

const FestivalName = ({ value, onChange }) => (
  <Input
    name="festival"
    label="Enter the name of your festival"
    placeholder="Example: Tomorrowland"
    value={value}
    onChange={onChange}
    required
  />
);

export default FestivalName;
