import React, { Component } from 'react';
import "./Cart.css";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartContent: []
        }
    }

    componentDidMount() {
        this.fetchCartContent();
    }

    //Get the contents of the cart, which were saved at the localStorage
    fetchCartContent = () => {
        let cartContent = Object.values(localStorage).map(product => {
            return JSON.parse(product);
        });

        this.setState({ cartContent });
    }

    render() {
        // let cartContent = JSON.parse(window.localStorage.

        return (
            <div>
                Cart
            </div>
        );
    }
}

export default Cart;