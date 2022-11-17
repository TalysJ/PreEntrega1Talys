import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import CartProvider from './context/CartContext';
import Intro from './components/Intro/Intro';

function App() {

  return (
    <>
    <BrowserRouter>
        <CartProvider>
        <NavBar/>
        {/* <Intro/> */}
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
        </Routes>
        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
