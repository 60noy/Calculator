import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../BasicButton/BasicButton';
export default class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <BasicButton label="1"  onClick={() => this.props.onNumerialButtonClick(1)} />
      <BasicButton label="2"  onClick={() => this.props.onNumerialButtonClick(2)} />
      <BasicButton label="3"  onClick={() => this.props.onNumerialButtonClick(3)} />
      <BasicButton label="4"  onClick={() => this.props.onNumerialButtonClick(4)} />
      <BasicButton label="-"  onClick={() => this.props.onSignButtonClick('-')} />
      <BasicButton label="+"  onClick={() => this.props.onSignButtonClick('+')} />
      <BasicButton label="*"  onClick={() => this.props.onSignButtonClick('*')} />
      <BasicButton label="="  onClick={() => this.props.onCalculateButtonClick()} />
      <BasicButton label="AC"  onClick={() => this.props.onCleanButton()} />
    </div>
    );
  }
}

ButtonsContainer.propTypes = {
};
