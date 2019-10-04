import React, { Fragment  } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className, label, disabled, onClick = () => { } }) => {
  return (
    <Fragment>
      <button
        className={className}
        aria-label={label}
        disabled={disabled}
        onClick={onClick}
        >
        {label}
      </button>
    </Fragment>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
