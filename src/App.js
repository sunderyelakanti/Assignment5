import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import product from './products.json'
import { useState } from 'react'
function GridExample() {
  const [searchTerm, setSearchTerm] = useState('')
  const [checked, setChecked] = useState(false)
 var handleFilter=(e)=>{
    if(e.target.checked){
      return e.value
    } else if(e.target.unchecked === ""){

    }
  }
  return (

    <div className='row'>
      <input type="text" placeholder="search..." onChange={(event) => {setSearchTerm(event.target.value)}}/>
      <>
      <div>
      <input type="checkbox" id="fragrances" name="interest" value="fragrances" onChange={handleFilter}/>
      <label for="fragrances">fragrances</label>
      </div>
      <div>
      <input type="checkbox"  id="laptops" name="interest" value="laptops"/>
      <label for="laptops">laptops</label>
      </div>
      <div>
      <input type="checkbox" id="smartphones" name="interest" value="smartphones"/>
      <label for="smartphones">smartphones</label>
      </div>
      </>
      <Container>
        <Row>
          {product.products.filter((item)=> {
            if (searchTerm === "") {
              return item
            } 
            else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
            
          }).map((item, idx) => (
            <Col ls={6} style={{ display: "inline-grid", width: "35rem" }}>

              <Card className="grid-container" idx={idx}>
                <Card.Img variant="top" src={item.images[0]} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price} </Card.Text>
                  <Card.Text>{item.category} </Card.Text>
                  <Card.Text>{item.rating} </Card.Text>
                </Card.Body>

              </Card>
            </Col>

          ))}
        </Row>
      </Container>

    </div>
  );
}

export default GridExample;