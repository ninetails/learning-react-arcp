import React, { Component } from 'react'

import Toggle from './components/Toggle'
import MyToggle from './components/MyToggle'
import MyEventComponent from './components/MyEventComponent'

const MyToggleWrapped = Toggle.withToggle(MyToggle)

const MyEventComponentWrapped = Toggle.withToggle(MyEventComponent)

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => on ? this.myToggle.focus() : undefined}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button/>
        <hr/>
        <MyToggleWrapped innerRef={myToggle => this.myToggle = myToggle} />
        <hr/>
        <MyToggleWrapped.ToggleMessage/>
      </Toggle>
    );
  }
}

export default App;
