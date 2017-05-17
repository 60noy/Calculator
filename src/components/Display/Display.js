import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
 const Display = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.exercise}>
        {props.exercise} 1
      </div>
      <div className={styles.current}>
        {props.answer} 23
      </div>
      <div className={styles.icon}>
    </div>
      </div>
    </div>
);
}

export default Display;
Display.propTypes = {
  answer: PropTypes.string.isRequired,
};
