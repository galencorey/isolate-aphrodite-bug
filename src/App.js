import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GenericButton from './buttons/GenericButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <GenericButton>I'm a generic button with a blue hover state</GenericButton>
        </p>
      </div>
    );
  }
}

export default App;
