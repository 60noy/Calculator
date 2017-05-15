import React from 'react';
import PropTypes from 'prop-types';

 const Display = (props) => {
  return (
    <div>
      <div>
      Exercise :
      {props.exercise}
    </div>
    <div>
      Solution :
      {props.answer}
    </div>
    </div>
);
}

export default Display;

Display.propTypes = {
  answer: PropTypes.string.isRequired,
};
