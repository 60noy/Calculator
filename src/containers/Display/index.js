import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import deleteIcon from '../../../public/images/ic_clear.svg';

const Display = ({ exercise, answer, onCleanButton }) => (
  <div className={styles.container}>
    <div className={styles.text}>
      <div className={styles.exercise}>
        {exercise}
      </div>
      <div className={styles.current}>
        {answer}
      </div>
    </div>
    { exercise !== '0' &&
    (<img
      src={deleteIcon}
      className={exercise !== 0 ? styles.icon : styles.iconHidden}
      alt="delete icon"
      onClick={onCleanButton}
    />)}
  </div>
);

export default Display;
Display.propTypes = {
  answer: PropTypes.string.isRequired,
  onCleanButton: PropTypes.func.isRequired,
  exercise: PropTypes.string.isRequired,
};
