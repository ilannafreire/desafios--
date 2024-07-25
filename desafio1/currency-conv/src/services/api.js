import axios from 'axios';

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const getExchangeRate = async (currency) => {
  try {
    const response = await axios.get(API_URL);
    const rates = response.data.bpi;
    if (rates[currency]) {
      return rates[currency].rate_float;
    } else {
      throw new Error('Currency not supported');
    }
  } catch (error) {
    throw new Error('API request failed');
  }
};
