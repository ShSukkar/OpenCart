import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <a href="/"><img className="logo" src="imgs/opencart-logo.png" alt="logo" /></a>
                <Link to="/cart"><i className="fa fa-shopping-cart fa-lg"></i></Link>
            </div>
        )
    }
}
