{/* <Col>
    <Card>
        <Card.Img variant="top" src={item.images[0]} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.price}
            </Card.Text>
            <Card.Text>
                {item.category}
            </Card.Text>
            <Card.Text>
                {item.rating}
            </Card.Text>
        </Card.Body>
    </Card>
</Col> */}


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import product from './products.json'

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {product.products.map((item, id) => 
      <Link to = {`/products/${item.id}`} key={item.id}>
      <Col>
    <Card>
        <Card.Img variant="top" src={item.images[0]} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.rating}</Card.Text>
        </Card.Body>
        <button variant="primary">price ${item.price}</button>
    </Card>
    </Col>
    </Link>
      )}
    </Row>
  );
}

export default GridExample;