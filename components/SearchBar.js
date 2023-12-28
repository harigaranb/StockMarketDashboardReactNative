// components/SearchBar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../utilities/actions';

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))} placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
