import React, { useState } from 'react';
import InputField from './components/InputField';
import CurrencySelector from './components/CurrencySelector';
import ConversionResult from './components/ConversionResult';
import { getExchangeRate } from './services/api';
import './styles/styles.css';

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    try {
      setError(null);
      const rate = await getExchangeRate(currency);
      setResult(amount * rate);
    } catch (err) {
      setError('Failed to fetch the exchange rate. Please try again.');
    }
  };

  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <InputField value={amount} onChange={setAmount} />
      <CurrencySelector value={currency} onChange={setCurrency} />
      <button className="convert-button" onClick={handleConvert}>Convert</button>
      {error && <div className="error">{error}</div>}
      <ConversionResult result={result} />
    </div>
  );
}

export default App;
