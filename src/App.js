import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/style.css';

import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import Register from './components/Register';

function App() {
  const [search, setSearch] = useState(''); // Add search state

  return (
    <AuthProvider>
      <Router>
        <Header search={search} setSearch={setSearch} /> {/* Pass search to Header */}
        <Routes>
          <Route path="/" element={<Home search={search} />} /> {/* Pass search to Home */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
