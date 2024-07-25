import React from 'react';

const InputField = ({ value, onChange }) => (
  <div>
    <label>Amount (BRL):</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default InputField;
