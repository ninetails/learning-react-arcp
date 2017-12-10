import React, { Component } from 'react'
import Switch from '../Switch'

export default class Toggle extends Component {
  static defaultProps = { onToggle: () => undefined };

  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on))

  render() {
    const { on } = this.state
    return (<Switch id="switch" on={on} onChange={this.toggle} />)
  }
}
