import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function Tooanavab() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/insert">Insert Author</Nav.Link>
            <Nav.Link as={Link} to="/display">display</Nav.Link>
            <Nav.Link as={Link} to="/alldata">Hole display</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Tooanavab
