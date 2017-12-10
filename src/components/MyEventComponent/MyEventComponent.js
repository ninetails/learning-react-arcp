import React from 'react';

const MyEventComponent = ({ toggle, event, on }) =>
  toggle.on ? (
    <button {...{ [event]: on }}>
      The {event} event
    </button>
  ) : null

export default MyEventComponent;
