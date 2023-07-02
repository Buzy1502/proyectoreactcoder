import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import {FaCat} from "react-icons/fa";
import "./navbar.css";


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='container-fluid'>
          <Navbar.Brand className='nav-icon-container' href="#home">
            <FaCat className='nav-icon'/>
            <span>Puss in Books</span>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#recomendados">Recomendados</Nav.Link>
            <Nav.Link href="#generos">Generos</Nav.Link>
            <Nav.Link href="#autores">Autores</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;