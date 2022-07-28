import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import product from './products.json'
import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'
function GridExample() {
  const [searchTerm, setSearchTerm] = useState('')
  //const [checked, setChecked] = useState(false)
  var handleFilter = (e) => {
    if (e.target.checked) {
      return e.value
    } else if (e.target.unchecked === "") {

    }
  }
  return (

    <div>
      <nav>
        <div class="container">
          <ul class="navbar-left">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul> 

          <ul class="navbar-right">
            <li><a href="#" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">3</span></a></li>
          </ul> 
        </div> 
        <div class="container">
  <div class="shopping-cart">
    <div class="shopping-cart-header">
      <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span>
      <div class="shopping-cart-total">
        <span class="lighter-text">Total:</span>
        <span class="main-color-text">$2,229.97</span>
      </div>
    </div>
    <ul class="shopping-cart-items">
      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span class="item-name">Sony DSC-RX100M III</span>
        <span class="item-price">$849.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>

      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
        <span class="item-name">KS Automatic Mechanic...</span>
        <span class="item-price">$1,249.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>

      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
        <span class="item-name">Kindle, 6" Glare-Free To...</span>
        <span class="item-price">$129.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" class="button">Checkout</a>
  </div> 
</div> 
      </nav>
      <input id="search" type="text" placeholder="search..." style={{ marginLeft: "3rem", margin: '20px' }} onChange={(event) => { setSearchTerm(event.target.value) }} />

      <>
        <div>
          <input type="checkbox" id="fragrances" name="interest" value="fragrances" onChange={handleFilter} />
          <label for="fragrances">fragrances</label>
        </div>
        <div>
          <input type="checkbox" id="laptops" name="interest" value="laptops" />
          <label for="laptops">laptops</label>
        </div>
        <div>
          <input type="checkbox" id="smartphones" name="interest" value="smartphones" />
          <label for="smartphones">smartphones</label>
        </div>


      </>



      <Container>
        <Row>
          {product.products.filter((item) => {
            if (searchTerm === "") {
              return item
            }
            else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }

          }).map((item, idx) => (
            <Col ls={6} style={{ width: "35rem" }}>

              <Card className="grid-container" idx={idx}>
                <Card.Img variant="top" src={item.images[0]} />
                <Card.Body style={{ width: "35rem" }}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price} </Card.Text>
                  <Card.Text>{item.category} </Card.Text>
                  <Card.Text>{item.rating} </Card.Text>
                  <Link to="/ProductDetails" style={{ marginLeft: "1rem" }} state={{ productinfo: item }} class="btn btn-primary">Product Details</Link>
                  <Link to="/" style={{ marginLeft: "1rem" }} class="btn btn-primary">Add Cart</Link>
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