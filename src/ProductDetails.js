import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
function ProductDetails() {
    const location = useLocation()
    const { productinfo } = location.state

    console.log(productinfo)
    return (

        // <div style={{ fontFamily: "sans-serif",
        // textAlign: "center", width: "35rem" }}>
        //     {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
        //         <div className="card-body">
        //             <h5 className="card-title">{productinfo.title}Card title</h5>
        //             <p className="card-text">{productinfo.description}</p>
        //             <p className="card-text">{productinfo.brand}</p>
        //             <p className="card-text">{productinfo.rating}</p>
        //             <Link to="/">Product Details</Link> 
        //         </div>
        // </div>
        <div className="card">
            <img src={productinfo.images[0]}  style={{width:"50%"}}/>
                <div className="container">
                    
                    <h5 className="card-title"><b> {productinfo.title} </b></h5>
                    <p className="card-text">{productinfo.description}</p>
                    <p className="card-text">{productinfo.brand}</p>
                   <p className="card-text">{productinfo.rating}</p>
                   <Link to="/App">Product Details</Link> 
                </div>
        </div>



    )
}

export default ProductDetails