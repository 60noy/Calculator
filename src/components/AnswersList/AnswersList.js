import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Answer from '../Answer/Answer';

const AnswersList = ({ data, onAnswerDelete }) => (
  <div>
    {data.map((ans) => {
      const id = shortid.generate();
      return (
        <Answer
          exercise={ans}
          key={id}
          onAnswerDelete={() => onAnswerDelete(id)}
        />
      );
    },
  )
    }
  </div>
  );

export default AnswersList;
AnswersList.propTypes = {
  data: PropTypes.array.isRequired,
  onAnswerDelete: PropTypes.func.isRequired,
};
