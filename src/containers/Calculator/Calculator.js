import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import Display from '../Display/Display';
import styles from './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'calculate',
      current: '0',
      exercise: '0',
    };
  }
  // handles click on number button
  handleNumerialButtonClick = (num) => {
    let { exercise, current } = this.state;
    const { mode } = this.state;
    if (current.length !== 6 && (num !== 0 || exercise !== '0')) {
      if (this.state.mode === 'number' && (num !== exercise !== 0)) {
        current += `${num}`;
        exercise += `${num}`;
      }
      else if (mode === 'expression') {
        exercise += `${num}`;
        current = `${num}`;
      }
      else if (mode === 'calculate') {
        current = `${num}`;
        exercise = `${num}`;
      }
      this.setState({ exercise, current, mode: 'number' });
    }
  }
  // handles click on expression button
  handleSignButtonClick = (sign) => {
    let { exercise, mode, current } = this.state;
    // changes the expression if the is already one
    if (mode === 'expression') {
      exercise = `${exercise.substring(0, exercise.length - 2) + sign} `;
    }
    // adds the expression to the end
    else {
      exercise += ` ${sign} `;
      mode = 'expression';
    }
    // sets the current sign
    current = sign;
    this.setState({ exercise, mode, current });
  }
  // handles click on calculate button
  handleCalculateButtonClick = () => {
    const { mode } = this.state;
    let { exercise, current } = this.state;
    const answer = `${eval(exercise)}`.substring(0, 6);
    // const fullExercise = `${exercise.split('').join(' ')} = ${answer}`;
    const answerObject = { exercise, answer, id: shortid.generate() };
    if (exercise.length >= 3 && mode !== 'calculate' && exercise !== current) {
      this.props.onNewCalculation(answerObject);
    }
    current = answer;
    exercise = answer;
    this.setState({ current, answer, exercise, mode: 'calculate' });
  }
  // handles click on AC button
  handleCleanButton =() => {
    this.setState({ current: '0', exercise: '0', mode: 'calculate' });
  }


  render() {
    return (
      <div className={styles.container}>
        <Display
          answer={`${this.state.current}`}
          exercise={`${this.state.exercise}`}
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
