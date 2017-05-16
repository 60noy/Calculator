import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../BasicButton/BasicButton';

const ButtonsContainer = (props) => {
  return (
    <div>
      <div>
    <BasicButton label="1"  onClick={() => props.onNumerialButtonClick(1)} />
    <BasicButton label="2"  onClick={() => props.onNumerialButtonClick(2)} />
    <BasicButton label="3"  onClick={() => props.onNumerialButtonClick(3)} />
      </div>
      <div>
    <BasicButton label="4"  onClick={() => props.onNumerialButtonClick(4)} />
    <BasicButton label="5"  onClick={() => props.onNumerialButtonClick(5)} />
    <BasicButton label="6"  onClick={() => props.onNumerialButtonClick(6)} />
  </div>
  <div>
    <BasicButton label="7"  onClick={() => props.onNumerialButtonClick(7)} />
    <BasicButton label="8"  onClick={() => props.onNumerialButtonClick(8)} />
    <BasicButton label="9"  onClick={() => props.onNumerialButtonClick(9)} />
  </div>
  <div>
    <BasicButton label="-"  onClick={() => props.onSignButtonClick('-')} />
    <BasicButton label="+"  onClick={() => props.onSignButtonClick('+')} />
    <BasicButton label="*"  onClick={() => props.onSignButtonClick('*')} />
    <BasicButton label="/"  onClick={() => props.onSignButtonClick('/')} />
    <BasicButton label="="  onClick={() => props.onCalculateButtonClick()} />
    <BasicButton label="AC"  onClick={() => props.onCleanButton()} />
  </div>
  <BasicButton label="0"  onClick={() => props.onNumerialButtonClick(0)} />
  </div>
);

}

export default ButtonsContainer
