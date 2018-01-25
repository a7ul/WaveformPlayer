import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from './style';

class CenterStage extends React.Component {
  render() {
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

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CenterStage);
