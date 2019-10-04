import React, { Fragment } from 'react';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = "text", name, label, placeholder, showError, value, errorMessage, onChange = () => { } }) => {

  const errorClassName = showError ? 'has-error' : '';

  return (
    <Fragment>
      <label htmlFor={placeholder}>{label}</label>
      <br/>
      <input
        id={name}
        className={`command-input ${errorClassName}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Tooltip placement="bottom" target={name} fade={false} isOpen={showError}>{errorMessage}</Tooltip>
    </Fragment>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
