import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Coutry">Add country</Nav.Link>
            <Nav.Link as={Link} to="/state">Add State</Nav.Link>
            <Nav.Link as={Link} to="/city">add City</Nav.Link>
            <Nav.Link as={Link} to="/display">Display</Nav.Link>
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Outlet/>
    </div>
    </>
  )
}
