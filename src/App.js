import React, { Component } from 'react';
import logo from './logo.svg';
import mba from './koba.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />
          <h1 className="App-title">Sem risadinha</h1>
        </header>
        <p className="App-intro">
          premissa: Cada uma das proposições que compõem um silogismo e em que se baseia a conclusão.
        </p>
      </div>
    );
  }
}

export default App;
