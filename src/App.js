import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';
import Header from './Header';
import data from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Schedule data={data} />
        </section>
      </div>
    );
  }
}

export default App;
