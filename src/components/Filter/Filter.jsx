// import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ onFilter }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" onChange={onFilter} />
  </label>
);

export default Filter;

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
