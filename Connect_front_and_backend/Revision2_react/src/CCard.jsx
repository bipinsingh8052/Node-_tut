import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CCard = () => {
  return (
  <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </>
  )
}

export default CCard
