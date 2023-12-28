// components/Dashboard.js
import React, { useState } from 'react';
import Widget from './Widget';
import StockList from './StockList';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const [widgets, setWidgets] = useState(['StockList', 'SearchBar']);

  const renderWidget = (widget) => {
    switch (widget) {
      case 'StockList':
        return <StockList key={widget} />;
      case 'SearchBar':
        return <SearchBar key={widget} onSearch={(term) => console.log('Searching:', term)} />;
      // Add more cases for other widgets
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Customizable Dashboard</h1>
      {widgets.map((widget) => (
        <Widget key={widget} title={widget}>
          {renderWidget(widget)}
        </Widget>
      ))}
    </div>
  );
};

export default Dashboard;
