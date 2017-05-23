import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicButton.css';

const BasicButton = ({ type, onClick, label }) => (
  <button
    className={styles[type]}
    onClick={onClick}
  >
    {label}
  </button>
  );

export default BasicButton;
BasicButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
