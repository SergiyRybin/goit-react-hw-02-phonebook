import React from 'react';

const Filter = ({onChange}) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" onChange={onChange} />
  </label>
);

export default Filter;
