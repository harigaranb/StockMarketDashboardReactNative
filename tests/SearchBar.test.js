// src/components/SearchBar.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search bar', () => {
  const { getByText, getByPlaceholderText } = render(<SearchBar />);
  const inputElement = getByPlaceholderText('Search...');
  const buttonElement = getByText('Search');
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('handles user input', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const inputElement = getByPlaceholderText('Search...');
  fireEvent.change(inputElement, { target: { value: 'AAPL' } });
  expect(inputElement.value).toBe('AAPL');
});
