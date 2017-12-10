import React, { Component } from 'react'

import Toggle from './components/Toggle'
import MyToggle from './components/MyToggle'
import MyEventComponent from './components/MyEventComponent'

const MyToggleWrapped = Toggle.withToggle(MyToggle)

const MyEventComponentWrapped = Toggle.withToggle(MyEventComponent)

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => console.log('toggle', on)}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button/>
        <hr/>
        <MyToggleWrapped />
        <hr />
        <MyEventComponentWrapped
          event="onClick"
          on={e => alert(e.type)}
          />
      </Toggle>
    );
  }
}

export default App;
