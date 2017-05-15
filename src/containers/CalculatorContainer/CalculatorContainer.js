import React from 'react';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      solution: '',
      exercise: ''
    }
  }

  render() {
    return (
      <div>
        <DisplayContainer
          exercise={this.state.exercise}
          solution={this.state.solution} />
        <ButtonsContainer />
        <Button label="label" onMouseUp={() => alert('hi')}/>
    </div>
  );
  }
}
