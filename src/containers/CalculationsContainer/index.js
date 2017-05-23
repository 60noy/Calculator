import React, { Component } from 'react';
import styles from './styles.css';
import Calculator from '../Calculator';
import AnswersListContainer from '../AnswersListContainer';

class CalculatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculations: [],
    };
  }
  // adds the calculation to calculations array in state
  handleCalculationAdded = (calculation) => {
    const { calculations } = this.state;
    calculations.push(calculation);
    this.setState({ calculations });
  }
    // deletes the answer on bin icon click
  handleAnswerDelete = (answerObjID) => {
    let { calculations } = this.state;
    calculations = calculations.filter(answer => answer.id !== answerObjID);
    this.setState({ calculations });
  }
  render() {
    return (
      <div className={styles.container}>
        <Calculator
          onNewCalculation={this.handleCalculationAdded}
        />
        <div className={styles.answers}>
          <AnswersListContainer
            data={this.state.calculations}
            onAnswerDelete={this.handleAnswerDelete}
          />
        </div>
      </div>
    );
  }
  }

export default CalculatorContainer;
