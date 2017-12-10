import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css'

const Switch = ({ id, defaultChecked, ...props }) => [
  <input key={`${id}-input`} type="checkbox" id={id} className="switch__input" defaultChecked={defaultChecked} {...props}/>,
  <label key={`${id}-label`} htmlFor={id} className="switch__label"/>
];

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool.isRequired
};

Switch.defaultProps = {
  defaultChecked: false
};

export default Switch;
