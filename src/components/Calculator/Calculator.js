import React from 'react';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import Display from '../Display/Display';
import styles from './Calculator.css';
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mode: 'calculate',
      current: '0',
      exercise: '0'
    }
  }
  // handles click on number button
  handleNumerialButtonClick = (num) =>{
    let {exercise,current,mode} = this.state;
    if (this.state.mode == 'number') {
      current += num + '';
      exercise += num + '';
    }
    else if(mode == 'expression'){
      exercise += num;
      current = num;
    }
    else if(mode == 'calculate'){
      current = num;
      exercise = num;
    }

    this.setState({exercise,current,mode: 'number'})

    // this.setState((prevState) => {answer: prevState.answer += num + ''})
    console.log(`number  ${num} clicked`);
  }
  // handles click on expression button
  handleSignButtonClick = (sign) =>{
    console.log(`sign  ${sign} clicked`);
    let {exercise,mode,current} = this.state;
    // changes the expression if the is already one
    if (mode == 'expression') {
      exercise = exercise.substring(0,exercise.length-1) + sign
      console.log('exercise exp',exercise);
    }
    // adds the expression to the end
    else{
      exercise += sign
      mode = 'expression'
    }
    // sets the current sign
    current = sign
    this.setState({exercise,mode,current})


  }
  // handles click on calculate button
  handleCalculateButtonClick = () =>{
    let {exercise,mode,current} = this.state
    let answer = eval(exercise)
    current = answer
    exercise = answer
        this.setState({current,answer,exercise,mode: 'calculate'})
  }
  // handles click on AC button
  handleCleanButton =() =>{
    this.setState({current: '0', exercise: '0',mode:'calculate'})
  }

  render() {
    return (
      <div className={styles.container}>
        <Display
          answer={this.state.current + ''}
          exercise={this.state.exercise + ''}
          onCleanButton={this.handleCleanButton}
        />
        <ButtonsContainer
          onNumerialButtonClick={this.handleNumerialButtonClick}
          onSignButtonClick={this.handleSignButtonClick}
          onCalculateButtonClick={this.handleCalculateButtonClick}
         />
      </div>
    );
  }
}
