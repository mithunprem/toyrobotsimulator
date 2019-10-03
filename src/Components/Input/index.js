import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = "text", label, placeholder, className, value, onChange = () => { } }) => {
  return (
    <Fragment>
      <label htmlFor={placeholder}>{label}</label>
      <br/>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
