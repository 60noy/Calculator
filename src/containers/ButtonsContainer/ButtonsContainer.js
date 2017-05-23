import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../../components/BasicButton/BasicButton';

const ButtonsContainer = ({ onNumerialButtonClick, onSignButtonClick, onCalculateButtonClick }) => (
  <div>
    <div>
      <BasicButton label="7" type="numerial" onClick={() => onNumerialButtonClick(7)} />
      <BasicButton label="8" type="numerial" onClick={() => onNumerialButtonClick(8)} />
      <BasicButton label="9" type="numerial" onClick={() => onNumerialButtonClick(9)} />
      <BasicButton label="-" type="expression" onClick={() => onSignButtonClick('-')} />
    </div>
    <div>
      <BasicButton label="4" type="numerial" onClick={() => onNumerialButtonClick(4)} />
      <BasicButton label="5" type="numerial" onClick={() => onNumerialButtonClick(5)} />
      <BasicButton label="6" type="numerial" onClick={() => onNumerialButtonClick(6)} />
      <BasicButton label="%" type="expression" onClick={() => onSignButtonClick('/')} />
    </div>
    <div>
      <BasicButton label="1" type="numerial" onClick={() => onNumerialButtonClick(1)} />
      <BasicButton label="2" type="numerial" onClick={() => onNumerialButtonClick(2)} />
      <BasicButton label="3" type="numerial" onClick={() => onNumerialButtonClick(3)} />
      <BasicButton label="*" type="expression" onClick={() => onSignButtonClick('*')} />
    </div>
    <div>
      <BasicButton label="." type="numerial" onClick={() => onNumerialButtonClick('.')} />
      <BasicButton label="0" type="numerial" onClick={() => onNumerialButtonClick(0)} />
      <BasicButton label="=" type="calculate" onClick={() => onCalculateButtonClick()} />
      <BasicButton label="+" type="expression" onClick={() => onSignButtonClick('+')} />
    </div>
  </div>
);

export default ButtonsContainer;
ButtonsContainer.propTypes = {
  onNumerialButtonClick: PropTypes.func.isRequired,
  onCalculateButtonClick: PropTypes.func.isRequired,
  onSignButtonClick: PropTypes.func.isRequired,
};
