// components/StockChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const StockChart = ({ stockData }) => {
  // Format stockData into chart data (labels and datasets)
  const chartData = {
    labels: stockData.map((data) => data.date),
    datasets: [
      {
        label: 'Stock Price',
        data: stockData.map((data) => data.price),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default StockChart;