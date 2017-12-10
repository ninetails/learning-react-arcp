import React, { Component } from 'react'

import Toggle from './components/Toggle'
import Switch from './components/Switch'

export default class App extends Component {
  initialState = { timesClicked: 0, on: false }

  state = this.initialState

  handleToggle = () => this.setState(({ timesClicked, on }) => ({
    timesClicked: timesClicked + 1,
    on: timesClicked >= 4 ? false : !on
  }))

  handleReset = () => this.setState(() => this.initialState)

  render() {
    const { timesClicked, on } = this.state

    return (
      <Toggle
        on={on}
        onToggle={on => console.log('toggle', on)}
        onReset={on => console.log('reset', on)}
        render={(toggle) => [
          <Switch key='switch' id="switch" {...toggle.getTogglerProps({ on: toggle.on, onClick: this.handleToggle })} />,
          <hr key='hr' />,
          timesClicked > 4
            ? [
                'Clicked too much!',
                <button key="reset" onClick={this.handleReset}>Reset</button>
              ]
            : `Clicks: ${timesClicked}`
        ]}
        />
    )
  }
}
