import React from 'react';

import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter contacts:
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;
