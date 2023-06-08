import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CryptoHome } from './pages/CryptoHome';
import { CryptoDetails } from './pages/CryptoDetails';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={<CryptoHome />}
        />
        <Route
          path='/coin/:id'
          element={<CryptoDetails />}
        />
      </Routes>
    </>
  )
}
