import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import SearchBar from '../components/SearchBar';
import FileTable from '../components/FileTable';
import dummyData from '../data/dummyData.json';

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from the dummy JSON file
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  const handleSearch = (searchText) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      {/* <LeftMenu /> */}
      <SearchBar onSearch={handleSearch} />
      <FileTable data={filteredData} />
    </div>
  );
};

export default Home;
