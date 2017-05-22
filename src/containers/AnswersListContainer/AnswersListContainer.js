import React from 'react';
import PropTypes from 'prop-types';
import AnswersList from '../../components/AnswersList/AnswersList';

const AnswersListContainer = ({ data, onAnswerDelete }) => (
  <div>
    <AnswersList
      data={data}
      onAnswerDelete={onAnswerDelete}
    />
  </div>
  );
export default AnswersListContainer;

AnswersListContainer.propTypes = {
  data: PropTypes.array.isRequired,
  onAnswerDelete: PropTypes.func.isRequired,
};
