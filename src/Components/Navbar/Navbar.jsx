import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import logo from "../../assets/logo.png";
export default function TopNav(props) {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      id="nav-cont"
      className="justify-content-center"
    >
      <Container className="nav-toggle">
        <Navbar.Brand href="/home">
          <img src={logo} className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mx-auto">
            {/* <Nav.Link className='mx-3' id='nav-item'  href="#home">Our Vision</Nav.Link> */}
            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "#about" : "../home/#about"}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "#domains" : "../home/#domains"}
            >
              Domains
            </Nav.Link>

            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "#blog" : "../home/#blog"}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "#events" : "../home/#events"}
            >
              Past Events
            </Nav.Link>
            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "#contact" : "../home/#contact"}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "./team" : "../team"}
            >
              Team
            </Nav.Link>
            <Nav.Link
              className="mx-3"
              id="nav-item2"
              href={props.page === "home" ? "../msoc" : "../msoc"}
            >
              MSOC
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
