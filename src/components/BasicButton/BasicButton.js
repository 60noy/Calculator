import React from 'react';
import PropTypes from 'prop-types';

const BasicButton = (props) => {
  return (
    <button
      onClick={props.onClick}
    >
      {props.label}
    </button>

);
}

export default BasicButton;

BasicButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
