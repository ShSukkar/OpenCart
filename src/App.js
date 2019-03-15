import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
