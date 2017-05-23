import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ButtonsContainer from '../ButtonsContainer';
import Display from '../Display';
import styles from './styles.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'calculate',
      currentInput: '0',
      exercise: '0',
    };
  }
  // handles click on number button
  handleNumerialButtonClick = (num) => {
    let { exercise, currentInput } = this.state;
    const { mode } = this.state;
    // checks whether the input length is not maximum or the user hasn't entered only zeroes
    if ((currentInput.length < 6 || mode === 'calculate') && (num !== 0 || exercise !== '0')) {
      if (mode === 'number') {
        currentInput += `${num}`;
        exercise += `${num}`;
      }
      // sets the input as the expression and adds the expression to the exercise
      else if (mode === 'expression') {
        currentInput = `${num}`;
        exercise += ` ${num}`;
      }
      // sets the input and the exercise as the number
      else if (mode === 'calculate') {
        currentInput = `${num}`;
        exercise = `${num}`;
      }
      this.setState({ exercise, currentInput, mode: 'number' });
    }
  }
  // handles click on expression button
  handleSignButtonClick = (sign) => {
    let { exercise, currentInput, mode } = this.state;
    // changes the expression if there is already one
    if (mode === 'expression') {
      exercise = exercise.substring(0, exercise.length - 1) + sign;
    }
    // adds the expression to the end
    else {
      exercise += ` ${sign}`;
      mode = 'expression';
    }
    // sets the currentInput sign
    currentInput = sign;
    this.setState({ exercise, mode, currentInput });
  }
  // handles click on calculate button
  handleCalculateButtonClick = () => {
    const { mode } = this.state;
    let { exercise, currentInput } = this.state;
    if (exercise.length >= 3 && mode !== 'calculate' && exercise !== currentInput) {
      const answer = `${eval(exercise)}`.substring(0, 6);
    // const fullExercise = `${exercise.split('').join(' ')} = ${answer}`;
      const answerObject = { exercise, answer, id: shortid.generate() };
      this.props.onNewCalculation(answerObject);
      currentInput = answer;
      exercise = answer;
      this.setState({ currentInput, answer, exercise, mode: 'calculate' });
    }
  }
  // handles click on AC button
  handleCleanButton =() => {
    this.setState({ currentInput: '0', exercise: '0', mode: 'calculate' });
  }
  render() {
    const { currentInput, exercise } = this.state;
    return (
      <div className={styles.container}>
        <Display
          answer={currentInput}
          exercise={exercise}
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

Calculator.propTypes = {
  onNewCalculation: PropTypes.func.isRequired,
};
export default Calculator;
