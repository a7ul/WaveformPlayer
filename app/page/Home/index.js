import React from 'react';
import Controller from '../../features/Controller';
import Version from '../../features/Version';
import styles from './style.css';

class Home extends React.Component {
  render () {
    return (
      <div className={styles.home}>
        <Version />
        <Controller />
      </div>
    );
  }
}

export default Home;
