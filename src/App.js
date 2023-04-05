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
          Premissa: O que vem antes da missa!!!
        </p>
      </div>
    );
  }
}

export default App;
