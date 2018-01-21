import React from 'react';
import * as styles from './style.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class SideBar extends React.Component {
  render () {
    return (
      <styles.Container />
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
