import React from 'react';
import PropTypes from 'prop-types';
import Answer from '../Answer/Answer';

const AnswersList = ({ data, onAnswerDelete }) => (
  <div>
    {data.map(calculation => (<Answer
      exercise={calculation.exercise}
      key={calculation.id}
      answer={calculation.answer}
      onAnswerDelete={() => onAnswerDelete(calculation.id)}
    />))
}
  </div>
);

export default AnswersList;
AnswersList.propTypes = {
  data: PropTypes.array.isRequired,
  onAnswerDelete: PropTypes.func.isRequired,
};
