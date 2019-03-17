import React, { Component } from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";


import Header from "../Header/Header.component";
import Home from "../Home/Home.component";
import Footer from "../Footer/Footer.component";
import Product from "../Product/Product.component";
import Cart from "../Cart/Cart.component";
import Checkout from "../Checkout/Checkout.component";

class MyRouter extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/products/:id" component={Product} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default MyRouter;