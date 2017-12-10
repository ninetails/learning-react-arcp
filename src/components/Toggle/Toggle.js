import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Switch from '../Switch'

export default class Toggle extends Component {
  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on))

  render() {
    const { on } = this.state
    return <Switch id="switch" on={on} onChange={this.toggle} />
  }
}
