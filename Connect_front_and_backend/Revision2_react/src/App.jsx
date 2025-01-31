// import College from "./College"
// import img from "../src/css/pic.jpeg"
// function App() {
 

//   return (
//     <>
//      <h1 className="app">hEllo my brother:</h1>
//      <College/>
//      <img src={img} />
//      <hr />
//      <img src="public/images.jpeg" />
//     </>
//   )
// }

// export default App

// import {Container} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UncontrolledExample from './UncontrolledExample';
import CCard from './CCard';
import Grid from './Grid';

const App = () => {
  return (
  <>
    <Container>
  <Navbar bg="danger" data-bs-theme="white">
      
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      
      </Navbar>

  <UncontrolledExample/>
  </Container>
  <br /> <br />
  <CCard/>
  <CCard/>
  <CCard/>
  <CCard/>
  <CCard/>

  <br /> <br /> 

  <Grid/>
  </>
  )
}

export default App
