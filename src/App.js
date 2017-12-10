import React, { Component } from 'react'

import Toggle from './components/Toggle'

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => console.log('toggle', on)}>
        <Toggle.On>The button is on</Toggle.On>
        <div>
          <Toggle.Off>The button is off</Toggle.Off>
          <Toggle.Button/>
        </div>
      </Toggle>
    );
  }
}

export default App;
