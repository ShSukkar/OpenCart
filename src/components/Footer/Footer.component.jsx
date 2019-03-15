import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <ul className="footer-list">
                    <a href="#"><li className="footer-item">Contact us</li></a>
                    <a href="#"><li className="footer-item">Terms of service</li></a>
                    <a href="#"><li className="footer-item">Privacy Policy</li></a>
                    <a href="#"><li className="footer-item">Help/FAQ</li></a>
                    <a href="#"><li className="footer-item">Customer support</li></a>
                </ul>
            </div>
        )
    }
}
