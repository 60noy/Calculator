import React from 'react';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import Display from '../Display/Display';
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mode: '',
      current: '',
      exercise: ''
    }
  }
  // handles click on number button
  handleNumerialButtonClick = (num) =>{
    let exercise = this.state.exercise;
    let current = this.state.current;
    exercise += num;
    if (this.state.mode == 'number') {
      current += num;
    }
    else {
      current = num;
    }

    this.setState({exercise,current,mode: 'number'})

    // this.setState((prevState) => {answer: prevState.answer += num + ''})
    console.log(`number  ${num} clicked`);
  }
  // handles click on expression button
  handleSignButtonClick = (sign) =>{
    console.log(`sign  ${sign} clicked`);
    let {exercise,mode,current} = this.state;
    if (mode == 'expression') {
      exercise = exercise.substring(0,exercise.length-1) + sign
      console.log('exercise exp',exercise);
    }
    else{
      exercise += sign
      mode = 'expression'
    }
    current = sign
    this.setState({exercise,mode,current})


  }
  // handles click on calculate button
  handleCalculateButtonClick = () =>{
    let {exercise,mode,current} = this.state
    let answer = eval(exercise)
    current = answer
    exercise = answer
        this.setState({current,answer,exercise})
  }
  // handles click on AC button
  handleCleanButton =() =>{
    this.setState({status: '', current: '', exercise: ''})
  }

  render() {
    return (
      <div>
        <Display
          answer={this.state.current ? this.state.current + '' : '0'}
          exercise={this.state.exercise}
        />
        <ButtonsContainer
          onNumerialButtonClick={this.handleNumerialButtonClick}
          onSignButtonClick={this.handleSignButtonClick}
          onCalculateButtonClick={this.handleCalculateButtonClick}
          onCleanButton={this.handleCleanButton}
         />
      </div>
    );
  }
}
