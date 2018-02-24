import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const AnimatedLoader = (props) => {
  const { shouldAnimate, size, color, ...extraProps } = props;
  return shouldAnimate ? (
    <styles.Loader size={size} color={color} {...extraProps} />
  ) : null;
};

AnimatedLoader.defaultProps = {
  shouldAnimate: true,
  size: 12,
  color: 'black'
};

AnimatedLoader.propTypes = {
  shouldAnimate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default AnimatedLoader;
