import React, {PropTypes} from 'react';
import Calculator from '../Calculator/Calculator';
import styles from './Main.css';
export default class Main extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Calculator />
    </div>
  );
  }
}

Main.propTypes = {
};
