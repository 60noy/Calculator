import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../BasicButton/BasicButton';

const ButtonsContainer = (props) => {
  return (
    <div>
      <div>
      </div>
      <div>
    <BasicButton label="1" type='numerial'  onClick={() => props.onNumerialButtonClick(1)} />
    <BasicButton label="2" type='numerial'  onClick={() => props.onNumerialButtonClick(2)} />
    <BasicButton label="3" type='numerial'  onClick={() => props.onNumerialButtonClick(3)} />
    <BasicButton label="*" type='expression'  onClick={() => props.onSignButtonClick('*')} />
      </div>
  <div>
    <BasicButton label="4" type='numerial' onClick={() => props.onNumerialButtonClick(4)} />
    <BasicButton label="5" type='numerial' onClick={() => props.onNumerialButtonClick(5)} />
    <BasicButton label="6" type='numerial' onClick={() => props.onNumerialButtonClick(6)} />
    <BasicButton label="%" type='expression'  onClick={() => props.onSignButtonClick('/')} />
  </div>
  <div>
    <BasicButton label="7" type='numerial' onClick={() => props.onNumerialButtonClick(7)} />
    <BasicButton label="8" type='numerial' onClick={() => props.onNumerialButtonClick(8)} />
    <BasicButton label="9" type='numerial' onClick={() => props.onNumerialButtonClick(9)} />
    <BasicButton label="-" type='expression' onClick={() => props.onSignButtonClick('-')} />
  </div>
  <div>
  <BasicButton label="." type='numerial' onClick={() => props.onNumerialButtonClick('.')} />
  <BasicButton label="0" type='numerial' onClick={() => props.onNumerialButtonClick(0)} />
  <BasicButton label="=" type='calculate'  onClick={() => props.onCalculateButtonClick()} />
  <BasicButton label="+" type='expression'  onClick={() => props.onSignButtonClick('+')} />

</div>
  </div>
);

}

export default ButtonsContainer
