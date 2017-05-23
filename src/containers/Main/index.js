import React from 'react';
import styles from './styles.css';
import CalculationsContainer from '../CalculationsContainer';

const Main = () => (
  <div>
    <div className={styles.title}>
      JavaScript Calculator
    </div>
    <CalculationsContainer />
  </div>
);

export default Main;
