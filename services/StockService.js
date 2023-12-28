// services/StockService.js
const apiKey = 'pk_518e8eba0490447fafb431170a1cf642'; // Replace with your actual IEX Cloud public key

export const fetchStockData = async (symbol) => {
  try {
    const response = await fetch(`https://cloud.iexapis.com/v1/stock/market/list/mostactive?token=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};
