import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { FaCat } from "react-icons/fa";
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className='container-fluid nav__container'>
        <Navbar.Brand className='nav-icon-container'>
          <Link to='/'>
            <FaCat className='nav-icon' />
            <span className="nav_title">Puss in Books</span>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto nav__link-container">
          <Link className="nav__link" to={`category/literatura`}>literatura</Link>
          <Link className="nav__link" to={`category/psicologia`}>Psicología</Link>
          <Link className="nav__link" to={`category/policiaco`}>Policíaco</Link>
          <Link className="nav__link" to={`category/cocina`}>Cocina</Link>
          <Link className="nav__link" to={`category/recomendados`}>Recomendados</Link>
        </Nav>
        <Link to='/cart'><CartWidget /></Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;