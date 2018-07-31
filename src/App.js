import React, { Component } from 'react';
import './App.css';
import Session from './Session';
import Header from './Header';
import Time from './Time';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Time value="09:00" />
          <Session title="Title 1" room="Room 1" level="acquainting"/>
          <Session title="Title 2" room="Room 2" level="living"/>
          <Time value="09:30" />
          <Session title="Title 2" room="Room 2"/>
        </section>
      </div>
    );
  }
}

export default App;
