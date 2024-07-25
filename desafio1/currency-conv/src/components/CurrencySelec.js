import React from 'react';

const CurrencySelector = ({ value, onChange }) => (
  <div>
    <label>Currency:</label>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="USD">USD/U.S. Dollar</option>
      <option value="EUR">EUR/Euro</option>
      <option value="GBP">GBP/Pound Sterling</option>
    </select>
  </div>
);

export default CurrencySelector;
