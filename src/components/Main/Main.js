import React, {PropTypes} from 'react';
import Calculator from '../Calculator/Calculator';
import styles from './Main.css';
import Answer from '../Answer/Answer';
export default class Main extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          JavaScript Calculator
        </div>
        <Calculator />
    </div>
  );
  }
}

Main.propTypes = {
};
