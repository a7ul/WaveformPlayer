import React from 'react';
import Controller from '../../features/Controller';
import styles from './style.css';

class Home extends React.Component {
  render () {
    return (
      <div className={styles.home}>
        <Controller />
      </div>
    );
  }
}

export default Home;
