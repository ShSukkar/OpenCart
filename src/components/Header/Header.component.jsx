import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <a href="/"><img className="logo" src="imgs/opencart-logo.png" alt="logo" /></a>
                <a href="#"><i className="fa fa-shopping-cart fa-lg"></i></a>
            </div>
        )
    }
}
