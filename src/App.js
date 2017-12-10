import React, { Component } from 'react'

import Toggle from './components/Toggle'

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => console.log('toggle', on)} />
    );
  }
}

export default App;
