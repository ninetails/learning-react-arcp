import React, { Component } from 'react'

import Toggle from './components/Toggle'
import MyToggle from './components/MyToggle'

const MyToggleWrapped = Toggle.withToggle(MyToggle)

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => console.log('toggle', on)}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button/>
        <hr/>
        <MyToggleWrapped/>
      </Toggle>
    );
  }
}

export default App;
