import React, { Component } from 'react';
import "./Home.css";
import { Card, Button } from "react-bootstrap";
import * as productCards from "../../data.js";
import { Link } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    addToCart = (key) => {
        let productDetails = productCards[key];
        window.localStorage.setItem("id" + productDetails.id, JSON.stringify(productDetails));
        alert(`${productDetails.title} has been added to your cart successfully!`)
    }

    render() {
        let allProductCards = productCards.map((prod, key) => {
            return (
                <Card className="col-md-3" style={{ width: '18rem', borderRadius: "20px" }}>
                    <Link to={`/products/${prod.id}`}>
                        <Card.Img variant="top" src={`${prod.img}`} style={{ borderRadius: "20px", width: "90%", alignSelf: "center" }} />
                    </Link>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "lighter" }}>{prod.title}</Card.Title>
                        <Card.Text style={{ color: "darkorange", fontWeight: "bold" }}>
                            {prod.price} JD
                        </Card.Text>
                        <Button onClick={() => this.addToCart(key)} style={{ color: "white", backgroundColor: "darkorange", border: "none", width: "100%", borderRadius: "20px", fontWeight: "bold" }}>ADD TO CART</Button>
                    </Card.Body>
                </Card>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {allProductCards}
                </div>
            </div>
        )
    }
}
