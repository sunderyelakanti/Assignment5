import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import product from './products.json'
import CardGroup from 'react-bootstrap/CardGroup';
function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {product.products.map((item, idx) => (
      <Col>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src={item.images[0]} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price} </Card.Text>
            <Card.Text>{item.category} </Card.Text>
            <Card.Text>{item.rating} </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        
      </CardGroup>
      </Col>
       
      ))}
    </Row>
  );
}

export default GridExample;