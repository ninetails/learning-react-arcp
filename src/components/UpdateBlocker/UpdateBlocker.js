import { Component } from 'react'

export default class UpdateBlocker extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return this.props.children
  }
}
