import { Component } from 'react'
import { createStore } from 'redux'

export default class Redux extends Component {
  static defaultProps = {
    initialState: {},
    onUpdate: () => undefined,
    onReset: () => undefined,
    reducer: state => state
  }

  initialState = this.props.initialState

  rootReducer = (state, action) => {
    if (action.type === 'REDUX_RESET') {
      return this.initialState
    }

    return this.props.reducer(state, action)
  }

  store = createStore(
    this.rootReducer,
    this.initialState
  )

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.setState(this.store.getState))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  isStateControlled() {
    return this.props.state !== undefined
  }

  reset = () =>
    this.isStateControlled()
      ? this.props.onReset(this.initialState)
      : this.store.dispatch({ type: 'REDUX_RESET' })

  render = () => this.props.render({
    state: this.isStateControlled() ? this.props.state : this.store.getState(),
    reset: this.reset,
    dispatch: this.store.dispatch
  })
}
