import './styles/global.css';
import React from 'react';
import Router from './router';
import './utils/youtubeDL';
import {findSoftwareVersion} from './features/Version/thunk';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  componentWillMount () {
    this.props.findSoftwareVersion();
  }
  render () {
    return (
      <Router />
    );
  }
}

App.defaultProps = {
  findSoftwareVersion: () => {}
};

App.propTypes = {
  findSoftwareVersion: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  findSoftwareVersion: () => dispatch(findSoftwareVersion())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
