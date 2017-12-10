import React from 'react'

const MyToggle = ({ on, toggle }) => (
  <button onClick={toggle}>
    { on ? 'on' : 'off' }
  </button>
)

export default MyToggle
