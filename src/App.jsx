import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryButton from './components/NavBar/CategoryButton/CategoryButton';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import Title from './components/Title/Title';
import React from 'react';

function App() {

  return (  
    <>
      <NavBar/>
      <CategoryButton/>
      <ItemListContainer/>
      <Title/>
    </>
  );
}

export default App;
