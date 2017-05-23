import React from 'react';
import styles from './Main.css';
import CalculationsContainer from '../CalculationsContainer/CalculationsContainer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculations: [],
    };
  }

  render() {
    return (
      <div>
        <div className={styles.title}>
          JavaScript Calculator
        </div>
        <CalculationsContainer />
      </div>
    );
  }
}
export default Main;
