import React from 'react';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

const Input = ({ type = "text", name, placeholder, showError, value, errorMessage, onChange = () => { } }) => {

  const errorClassName = showError ? 'has-error' : '';

  return (
    <>
      <input
        id={name}
        className={`custom-input ${errorClassName}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Tooltip placement="bottom" target={name} fade={false} isOpen={showError}>{errorMessage}</Tooltip>
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
