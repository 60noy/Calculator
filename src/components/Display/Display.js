import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
import BasicButton from '../BasicButton/BasicButton';
import deleteIcon from '../../../public/images/ic_clear.svg';
 const Display = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.exercise}>
        {props.exercise}
      </div>
      <div className={styles.current}>
        {props.answer}
      </div>
      </div>
      <img src={deleteIcon} className={props.exercise !== 0 ? styles.icon : styles.icon-hidden} onClick={() => props.onCleanButton()}/>
    </div>
);
}

export default Display;
Display.propTypes = {
  answer: PropTypes.string.isRequired,
};
