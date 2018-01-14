import React from 'react';
import styles from './style.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.sidebar} />
    );
  }
}

SideBar.defaultProps = {

};

SideBar.propTypes = {

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
