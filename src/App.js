import React, { Component } from 'react';
import './App.css';
import MyRouter from "./components/Router/Router";

class App extends Component {
  componentWillMount() {
    localStorage.clear();
  }

  render() {
    return (
      <div className="container">
        <MyRouter />
      </div>
    );
  }
}

export default App;
