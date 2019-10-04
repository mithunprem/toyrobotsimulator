import React, { Fragment  } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, disabled, size, onClick = () => { } }) => {
  return (
    <Fragment>
      <button
        className="ml-3 command-button"
        aria-label={label}
        disabled={disabled}
        size={size}
        onClick={onClick}
        >
        {label}
      </button>
    </Fragment>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
