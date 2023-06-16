import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CryptoHome } from './pages/CryptoHome';
import { CryptoDetails } from './pages/CryptoDetails';
import { Navbar } from './components/Navbar';
import { Favorite } from './pages/CryptoFavorite';

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
        <Route
          path='/coin/favorite'
          element={<Favorite />}
        />
      </Routes>
    </>
  )
}
