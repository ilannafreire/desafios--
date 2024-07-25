import React from 'react';

const ConversionResult = ({ result }) => (
  <div>
    <h2>Conversion Result</h2>
    {result ? <p>Converted Amount: ${result.toFixed(2)}</p> : <p>No result yet.</p>}
  </div>
);

export default ConversionResult;
