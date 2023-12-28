// components/Widget.js
import React from 'react';

const Widget = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Widget;
