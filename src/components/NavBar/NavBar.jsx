import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to= '/'>Renaissance Vending <CartWidget/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='/'>Inicio</Nav.Link>
            <Nav.Link to='/category/snack'>Maquinas de Snack</Nav.Link>
            <Nav.Link to='/category/coffe'>Maquinas de Cafe</Nav.Link>
            <Nav.Link to='/supplies'>Insumos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ItemDetailContainer/>
    </>
  );
}

export default NavBar;