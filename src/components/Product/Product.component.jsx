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
            productId: this.props.match.params.id,
            productDetails: products[this.props.match.params.id - 1]
        }
    }

    componentDidMount() {
        // this.setState({ productDetails: products[this.state.productId - 1] });
    }

    onChange(selectedItemId) {
        console.log(selectedItemId);
        this.setState({ productId: selectedItemId, productDetails: products[selectedItemId] });

    }

    addToCart = () => {

    }

    render() {
        let { productId, productDetails } = this.state;

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
                        <Carousel className="carousel" onChange={(selectedItem) => {
                            this.onChange(selectedItem);
                        }}>
                            {featuredProductsImgs}
                        </Carousel>
                    </div>
                    <div className="col-md-6 body-div">
                        <h2>{productDetails.title}</h2>
                        <h3 style={{ color: "darkorange", fontWeight: "bold" }}>
                            {productDetails.price} JD
                        </h3>
                        <p>
                            {productDetails.desc}
                        </p>
                        <Button onClick={this.addToCart} style={{ color: "white", backgroundColor: "darkorange", border: "none", width: "100%", height: "50px", letterSpacing: "2px", borderRadius: "20px", fontWeight: "bold" }}>ADD TO CART</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;