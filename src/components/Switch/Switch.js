import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css'

const Switch = ({ id, defaultChecked, on, ...props }) => {
  const check = {};
  if (typeof on === 'boolean') {
    check.checked = on;
  } else if (typeof props.checked === 'boolean') {
    check.checked = props.checked;
  } else {
    check.defaultChecked = defaultChecked;
  }

  return [
    <input
      className="switch__input"
      id={id}
      key={`${id}-input`}
      type="checkbox"
      {...check}
      {...props}
      />,
    <label key={`${id}-label`} htmlFor={id} className="switch__label"/>
  ];
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
  on: PropTypes.bool
};

Switch.defaultProps = {
  defaultChecked: false
};

export default Switch;
