import React, { Component } from 'react';
import "./Checkout.css";
import Order from "./Order/Order.component";
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderDetails: this.props.location.state['cartContent']
        }
    }

    render() {
        return (
            <div className="Checkout container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="container">
                            <Typography variant="h5">BILLING DETAILS</Typography>
                            <div className="row">
                                <TextField
                                    required
                                    className="col-md-6"
                                    label="First Name"
                                    style={{ paddingRight: "60px", marginTop: "40px" }}
                                />
                                <TextField
                                    required
                                    className="col-md-6"
                                    label="Last Name"
                                    style={{ paddingRight: "60px", marginTop: "40px" }}
                                />
                                <TextField
                                    required
                                    className="col-md-6"
                                    label="Email"
                                    type="email"
                                    style={{ paddingRight: "60px", marginTop: "40px" }}
                                />
                                <TextField
                                    required
                                    className="col-md-6"
                                    label="Phone Number"
                                    style={{ paddingRight: "60px", marginTop: "40px" }}
                                />
                                <TextField
                                    required
                                    className="col-md-12"
                                    label="Address"
                                    style={{ paddingRight: "60px", marginTop: "40px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Typography variant="h5">YOUR ORDER</Typography>
                        <Order orderInfo={this.state.orderDetails} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;