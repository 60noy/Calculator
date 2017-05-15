import React from 'react';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import Display from '../Display/Display';
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      status: '',
      answer: '',
      exercise: ''
    }
  }
  // handles click on number button
  handleNumerialButtonClick = (num) =>{
    let exercise = this.state.exercise;
    this.setState({exercise: exercise + num})

    // this.setState((prevState) => {answer: prevState.answer += num + ''})
    console.log(`number  ${num} clicked`);
  }
  // handles click on expression button
  handleSignButtonClick = (sign) =>{
    console.log(`sign  ${sign} clicked`);
    let exercise = this.state.exercise;
    this.setState({exercise: exercise + sign})


  }
  // handles click on calculate button
  handleCalculateButtonClick = () =>{
    let exercise = this.state.exercise;
        this.setState({answer: eval(exercise)})
  }
  // handles click on AC button
  handleCleanButton =() =>{
    this.setState({status: '', answer: '', exercise: ''})
  }

  render() {
    return (
      <div>
        <Display
          answer={this.state.answer}
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
