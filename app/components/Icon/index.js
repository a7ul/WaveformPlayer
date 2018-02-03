import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from './config.json';// the file exported from IcoMoon

const getPath = (iconName) => {
  const icon = iconPaths.icons.find((ico) => (ico.properties.name === iconName));
  if (icon) {
    return icon.icon.paths.join(' ');
  }
  console.warn(`icon ${iconName} does not exist.`); // eslint-disable-line no-console
  return '';
};

const Icon = ({
  size, name, fill, ...extraProps
}) => (
  <svg {...extraProps} width={size} height={size} viewBox="0 0 1024 1024" fill={fill}>
    <path d={getPath(name)} />
  </svg>
);

Icon.defaultProps = {
  size: 20,
  fill: '#000'
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string
};

export default Icon;
