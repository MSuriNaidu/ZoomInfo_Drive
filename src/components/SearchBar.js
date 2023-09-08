import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search"
      onChange={handleChange}
      value={searchText}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <button onClick={handleSearch}>Search</button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
