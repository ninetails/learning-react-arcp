import React, { Component } from 'react'
import './App.css'

import Switch from './components/Switch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch id="switch" />
      </div>
    );
  }
}

export default App;
