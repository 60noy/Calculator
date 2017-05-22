import React from 'react';
import PropTypes from 'prop-types';
import styles from './Answer.css';
import icDelete from '../../../public/images/ic_delete_red.png';

const Answer = ({ exercise, onAnswerDelete, answer }) => (
  <div className={styles.container}>
    <div className={styles.fullExercise}>
      {exercise} =
      <span className={styles.answer}>
        {` ${answer}`}
      </span>

    </div>
    <img
      src={icDelete}
      alt="delete exercise"
      className={styles.btnDelete}
      onClick={onAnswerDelete}
      width="24px"
      height="24px"
    />
  </div>
);

export default Answer;

Answer.propTypes = {
  exercise: PropTypes.string.isRequired,
  onAnswerDelete: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};
