// components/StockList.js
import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../services/StockService';
import StockChart from './StockChart';
import SearchBar from './SearchBar';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData(searchTerm || 'AAPL'); // Default: Fetch data for Apple Inc.
        setStocks(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <h2>Stock List</h2>
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <StockChart stockData={stocks} />
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>{stock.symbol} - {stock.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
