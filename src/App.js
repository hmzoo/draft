import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import Items from './items/Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>Counter :</h2>
        <Counter />
        <h2>Items :</h2>
          <Items />
      </div>
    );
  }
}

export default App;
