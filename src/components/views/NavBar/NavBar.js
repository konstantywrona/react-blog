import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 px-1 rounded"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Blog.app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
