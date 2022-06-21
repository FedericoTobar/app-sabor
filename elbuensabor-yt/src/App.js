import React from 'react';

import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/carrito" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    

    </>
  );
}

export default App;
