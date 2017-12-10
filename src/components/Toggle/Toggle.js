import { Component } from 'react'

const compose = (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

export default class Toggle extends Component {
  state = { on: false }

  toggle = () => this.setState(
    ({ on }) => ({ on: !on }),
    () => this.props.onToggle(this.state.on)
  )

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    'aria-expanded': this.state.on,
    onClick: compose(onClick, this.toggle),
    ...props
  })

  render = () => this.props.render({
    on: this.state.on,
    toggle: this.toggle,
    getTogglerProps: this.getTogglerProps
  })
}
