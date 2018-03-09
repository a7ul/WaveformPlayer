import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const AnimatedLogoIcon = (props) => {
  const { size, shouldAnimate, ...extraProps } = props;
  return (
    <svg {...extraProps} width={size} height={size} viewBox="0 -5 15 20">
      <styles.BackPolyline points="1 6 4 6 6 11 10 1 12 6 15 6" />
      <styles.FrontPolyline shouldAnimate={shouldAnimate} points="1 6 4 6 6 11 10 1 12 6 15 6" />
    </svg>
  );
};

AnimatedLogoIcon.defaultProps = {
  size: 200,
  shouldAnimate: true
};

AnimatedLogoIcon.propTypes = {
  size: PropTypes.number,
  shouldAnimate: PropTypes.bool
};

export default AnimatedLogoIcon;
