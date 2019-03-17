import React, { Component } from 'react';
import "./Order.css";
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from "react-bootstrap"

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            payingType: "Cash"
        }
    }

    componentDidMount() {
        this.calculateTotal();
    }

    calculateTotal = () => {
        let total = 0;
        this.props.orderInfo.forEach(prod => {
            total += Number(prod.price);
        });
        this.setState({ total });
    }

    changePaymentMethod = (e) => {
        console.log(e.target);

        this.setState({ payingType: e.target.value });
    }

    saveOrder = () => { }

    render() {
        let { total } = this.state;
        let { orderInfo } = this.props;

        let orderTableRows = orderInfo.map(prod => {
            return (
                <tr>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                </tr>
            )
        });

        return (
            <div className="Order">
                <div className="orderDetails">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderTableRows}
                            <tr>
                                <td>TOTAL</td>
                                <td style={{ fontWeight: "bold" }}>{total} JD</td>
                            </tr>
                        </tbody>
                    </table>

                    <FormControl style={{ marginLeft: "10px" }}>
                        <FormLabel component="legend" color="primary">PAYMENT METHOD</FormLabel>
                        <RadioGroup
                            aria-label="PAYMENT METHOD"
                            name="paymentMethod"
                            color="primary"
                            value={this.state.payingType}
                            onChange={this.changePaymentMethod}>
                            <FormControlLabel
                                value="Cash"
                                control={<Radio color="primary" />}
                                label="Cash"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Stripe"
                                control={<Radio color="primary" />}
                                label="Stripe"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                < Button onClick={this.saveOrder} style={{ color: "white", backgroundColor: "darkorange", border: "none", width: "100%", height: "50px", letterSpacing: "1px", borderRadius: "20px", display: "block", margin: "auto" }}>PLACE ORDER</Button>
            </div>
        );
    }
}

export default Order;