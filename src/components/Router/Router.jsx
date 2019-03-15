import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header.component";
import Home from "../Home/Home.component";
import Footer from "../Footer/Footer.component";
import Product from "../Product/Product.component";

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/product" component={Product} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default MyRouter;