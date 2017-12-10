import React, { Component } from 'react'

export default class MyInputs extends Component {
  state = { upperValue: '', lowerValue: '' }

  handleChange = e =>
    this.setState({
      upperValue: e.target.value.toUpperCase(),
      lowerValue: e.target.value.toLowerCase()
    })

  render() {
    const { upperValue, lowerValue } = this.state

    return [
      <label key="upper" className="center">
        Upper:
        <input
          type="text"
          value={upperValue}
          onChange={this.handleChange}
        />
      </label>,
      <hr key="hr" />,
      <label key="lower" className="center">
        Lower:
        <input
          type="text"
          value={lowerValue}
          onChange={this.handleChange}
        />
      </label>
    ]
  }
}
