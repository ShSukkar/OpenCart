import React, { Component } from 'react';
import "./Cart.css";
import { Button } from "react-bootstrap";

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

    deleteFromCart = (prodId) => {
        let { cartContent } = this.state;

        cartContent.forEach((prod, i) => {
            if (cartContent[i].id === prodId) {
                cartContent.splice(i, 1);
                this.setState({ cartContent })
            }
        });
    }

    render() {
        let { cartContent } = this.state;
        let tableRows = cartContent.map(prod => {
            return (
                <tr>
                    <td><img className="tbl-img" src={prod.img} alt="prod-img" /></td>
                    <td>{prod.title}</td>
                    <td style={{ color: "darkorange" }}>{prod.price}</td>
                    <td><i className="fa fa-trash" onClick={() => this.deleteFromCart(prod.id)} style={{ color: "darkgrey", border: "1px darkgrey solid", borderRadius: "2px", cursor: "pointer" }}></i></td>
                </tr>
            );
        })

        return (
            <div className="Cart">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;