import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Login from './components/Login';
import Signup from './components/Signup';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
