import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicButton.css';

const BasicButton = (props) => {
  let className;
  if (props.type == 'numerial') {
    className = styles.numerial
  }
  else if(props.type == 'expression'){
    className = styles.expression
  }
  else if(props.type == 'clear'){
    className = styles.clear
  }
  else if(props.type == 'calculate'){
    className = styles.calculate
  }
  else {
    className = styles.normal
  }
  return (
    <button className={className}
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
