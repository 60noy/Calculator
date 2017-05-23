import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicButton.css';

const BasicButton = ({ type, onClick, label }) => {
  let className;
  if (type === 'numerial') {
    className = styles.numerial;
  }
  else if (type === 'expression') {
    className = styles.expression;
  }
  else if (type === 'clear') {
    className = styles.clear;
  }
  else if (type === 'calculate') {
    className = styles.calculate;
  }
  else {
    className = styles.normal;
  }
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BasicButton;
BasicButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
