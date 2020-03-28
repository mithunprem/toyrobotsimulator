import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, label, disabled, onClick = () => { } }) => {
  return (
    <button
      className={className}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
