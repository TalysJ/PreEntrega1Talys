import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/NavBar/CartWidget/CartWidget';


function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemList/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
