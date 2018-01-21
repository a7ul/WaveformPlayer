import React from 'react';
import * as styles from './style';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class CenterStage extends React.Component {
  render () {
    return (
      <styles.Container>
        {this.props.children}
      </styles.Container>
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
