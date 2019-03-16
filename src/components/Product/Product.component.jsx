import React, { Component } from 'react';
import "./Product.css";
import { Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as products from "../../data.js";


class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: this.props.match.params.id
        }
    }

    componentDidMount() {
    }

    render() {
        let { productId } = this.state;

        let featuredProductsImgs = products.map((prod, key) => {
            return (
                <div key={key}>
                    <img src={`${prod.img}`} alt="prod-img" />
                </div>
            );
        });

        return (
            <div className="Product">
                <div className="row" style={{ width: '100%', borderRadius: "20px", border: "1px lightgrey solid", boxShadow: ".5px .5px 1px 1px #aaaaaa" }}>
                    <div className="col-md-6 carousel-div">
                        <Carousel className="carousel">
                            {featuredProductsImgs}
                        </Carousel>
                    </div>
                    <div className="col-md-6 body-div">
                        <h2>{products[productId - 1].title}</h2>
                        <h3 style={{ color: "darkorange", fontWeight: "bold" }}>
                            {products[productId - 1].price} JD
                        </h3>
                        <p>
                            {products[productId - 1].desc}
                        </p>
                        <Button style={{ color: "white", backgroundColor: "darkorange", border: "none", width: "100%", height: "50px", letterSpacing: "2px", borderRadius: "20px", fontWeight: "bold" }}>ADD TO CART</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;