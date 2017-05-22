import React from 'react';
import PropTypes from 'prop-types';
import AnswersList from '../../components/AnswersList/AnswersList';

export default class AnswersListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  // deletes the answer on bin icon click
  handleAnswerDelete = (answerObjID) => {
    let data = this.state.data;
    data = data.filter(answer => answer.id !== answerObjID);
    this.setState({ data });
  }
  render() {
    return (
      <div>
        <AnswersList
          data={this.state.data}
          onAnswerDelete={this.handleAnswerDelete}
        />
      </div>
    );
  }
}
AnswersListContainer.propTypes = {
  data: PropTypes.array.isRequired,
};
