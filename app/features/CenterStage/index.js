import React from 'react';
import styles from './style.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class CenterStage extends React.Component {
  render () {
    return (
      <div className={styles.centerStage}>
        {this.props.children}
      </div>
    );
  }
}

CenterStage.defaultProps = {
  children: null
};

CenterStage.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CenterStage);
