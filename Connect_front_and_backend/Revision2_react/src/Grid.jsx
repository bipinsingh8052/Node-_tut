import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
  return (
    <Container>
      <Row> 
        <Col md={2} className='bg-success'>Bipin</Col>
        <Col md={2} className='bg-primary'>2 of 2</Col>
        <Col md={6} className='bg-danger'>2 of 2</Col>
        <Col md={2} className='bg-info'>2 of 2</Col>
      </Row>
      <Row>
        <Col md={1} className='bg-success'>Shivansh</Col>
        <Col md={2} className='bg-info'>Shivansh</Col>
        <Col md={6} className='bg-primary'>Shivansh</Col>
        <Col md={1} className='bg-danger'>Shivansh</Col>
        <Col md={2} className='bg-success'>Shivansh</Col>
      </Row>
      <Row>
        <Col md={5} className='bg-success'>Shivansh</Col>
        <Col md={3} className='bg-info'>Shivansh</Col>
        <Col md={3} className='bg-primary'>Shivansh</Col>
        <Col md={1} className='bg-danger'>Shivansh</Col>
      </Row>
    </Container>
  );
}

export default Grid;