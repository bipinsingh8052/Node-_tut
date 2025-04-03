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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/state">State</Nav.Link>
            <Nav.Link as={Link} to="/city">City</Nav.Link>
            <Nav.Link as={Link} to="/employ">Employee</Nav.Link>
            <Nav.Link as={Link} to="/mangment">Mangement</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <Outlet/>
  <br />
    <div>This is Footer </div>
    </>
  )
}
