import { Component } from 'react'
import PropTypes from 'prop-types'

const compose = (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

export default class Toggle extends Component {
  static propTypes = {
    defaultOn: PropTypes.bool,
    onReset: PropTypes.func,
    onToggle: PropTypes.func
  }

  static defaultProps = {
    defaultOn: false,
    onReset: () => undefined,
    onToggle: () => undefined
  };

  initialState = { on: this.props.defaultOn }

  state = this.initialState

  reset = () => this.setState(
    () => this.initialState,
    () => this.props.onReset(this.state.on)
  )

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
    reset: this.reset,
    getTogglerProps: this.getTogglerProps
  })
}
