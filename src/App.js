import React, { Component } from 'react';
import team from './team.jpeg';
import mba from './MBA.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to FIAP 15 DVP Matheus</h1>
        </header>
        <p className="App-intro">
         O time de milhões!


          <h1 className="App-title">Welcome to FIAP 15 DVP Matheus"</h1>

        </p>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Made by: Matheus

        </p>
        <img src={team} alt="team" />
      </div>
    );
  }
}

export default App;
