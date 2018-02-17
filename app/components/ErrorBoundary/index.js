import React from 'react';
import PropTypes from 'prop-types';
import logger from '../../utils/logger';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    logger.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.{this.props.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
  errorMessage: ''
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string
};

