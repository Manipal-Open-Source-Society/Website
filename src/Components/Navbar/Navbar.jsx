import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import logo from '../../assets/logo.png'
export default function TopNav() {
  return (
    <Navbar variant="dark" expand="lg"  id="nav-cont" className="justify-content-center">
      <Container>
        <Navbar.Brand href="/home">
          <img src={logo} className='nav-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link className='mx-3' href="#home">Our Vision</Nav.Link>
            <Nav.Link className='mx-3' href="#about">About Us</Nav.Link>
            <Nav.Link className='mx-3' href="#blog">Blog</Nav.Link>
            <Nav.Link className='mx-3' href="#events">Past Events</Nav.Link>
            <Nav.Link className='mx-3' href="#contact">Contact Us</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

