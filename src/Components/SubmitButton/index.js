import React, { Fragment  } from 'react';
import PropTypes from 'prop-types';
import './submitButton.scss';

const SubmitButton = ({ type = "text", size, label, onClick = () => { } }) => {
  return (
    <Fragment>
      <button
        className="ml-3 submit-button"
        aria-label="Submit Command"
        size={size}
        type={type}
        onClick={onClick}
        >
        {label}
      </button>
    </Fragment>
  )
}

SubmitButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default SubmitButton;
