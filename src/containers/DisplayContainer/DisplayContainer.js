import React from 'react';
import PropTypes from 'prop-types';
import Display from '../../components/Display/Display';

class DisplayContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Display
          exercise={this.props.exercise}
          solution={this.props.solution}/>
    </div>
  );
  }
}

export default DisplayContainer;

DisplayContainer.propTypes = {
};
