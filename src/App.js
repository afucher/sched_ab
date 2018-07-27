import React, { Component } from 'react';
import logo from './logo.svg';
import Session from './Session';
import './App.css';
//import './Session.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Agile Brazil 2018</h1>
        </header>
        <section>
          <Session title="Title 1" room="Room 1" level="acquainting"/>
          <Session title="Title 2" room="Room 2" level="living"/>
          <Session title="Title 2" room="Room 2"/>
        </section>
      </div>
    );
  }
}

export default App;
