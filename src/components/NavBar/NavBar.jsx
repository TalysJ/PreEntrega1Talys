import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {NavLink} from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to= '/'>Renaissance Vending <CartWidget/></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav__link" to='/'>Inicio</NavLink>
            <NavLink className="nav__link" to='/category/snack'>Maquinas de Snack</NavLink>
            <NavLink className="nav__link" to='/category/coffe'>Maquinas de Cafe</NavLink>
            <NavLink className="nav__link" to='/supplies'>Insumos</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <ItemDetailContainer/>
    </>
  );
}

export default NavBar;