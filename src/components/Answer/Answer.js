import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ exercise, onAnswerDelete }) => (
  <div style={{ flex: 1, justifyContant: 'spaceAround' }}>
    <div> {exercise} </div>
    <button onClick={onAnswerDelete}> delete </button>
  </div>
);

export default Answer;

Answer.propTypes = {
  exercise: PropTypes.string.isRequired,
  onAnswerDelete: PropTypes.func.isRequired,
};
