import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css'

const Switch = ({ id, defaultChecked, on, ...props }) => [
  <input
    checked={typeof on === 'boolean' ? on : props.checked}
    className="switch__input"
    defaultChecked={defaultChecked}
    id={id}
    key={`${id}-input`}
    type="checkbox"
    {...props}
    />,
  <label key={`${id}-label`} htmlFor={id} className="switch__label"/>
];

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
  on: PropTypes.bool
};

Switch.defaultProps = {
  defaultChecked: false
};

export default Switch;
