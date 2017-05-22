import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from './icon.config.json';// the file exported from IcoMoon

const getPath = (iconName) => {
  const icon = iconPaths.icons.find((icon) => (icon.properties.name === iconName));
  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
};

const Icon = ({size = '20', name}) => (
  <svg width={size} height={size} viewBox='0 0 1024 1024'>
    <path d={getPath(name)} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default Icon;
