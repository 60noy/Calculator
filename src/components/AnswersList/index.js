import React from 'react';
import PropTypes from 'prop-types';
import Answer from '../Answer';

let counter = 0;
const AnswersList = ({ data, onAnswerDelete }) => (
  <div>
    {data.map((calculation) => {
      counter += 1;
      return (<Answer
        exercise={calculation.exercise}
        key={counter}
        answer={calculation.answer}
        onAnswerDelete={() => onAnswerDelete(calculation.id)}
      />);
    },
)}
  </div>
);

AnswersList.propTypes = {
  data: PropTypes.array.isRequired,
  onAnswerDelete: PropTypes.func.isRequired,
};
export default AnswersList;
