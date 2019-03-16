import React, { Component } from 'react';
import "./Checkout.css";
import Order from "./Order/Order.component";

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="Checkout container">
                <div className="row">
                    <div className="col-md-8">
                        INFO
                    </div>
                    <div className="col-md-4">
                        <Order />
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;