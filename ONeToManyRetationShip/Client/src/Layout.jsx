import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <><Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home" >Home</Nav.Link>
        <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
        <Nav.Link as={Link} to="/display">Display Insert</Nav.Link>
        <Nav.Link as={Link} to="/displaybook">Display Book</Nav.Link>
        <Nav.Link as={Link} to="/displayAuthor">Display Author</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <main>
    <Outlet/>
  </main>


  <hr></hr>
      

      <div style={{width:"100%", backgroundColor:"red" }}>Footer www.com </div>
    </>
  )
}
