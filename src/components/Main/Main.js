import React, {PropTypes} from 'react';
import Calculator from '../Calculator/Calculator';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        Yo!
        <Calculator />

    </div>
  );
  }
}

Main.propTypes = {
};
