import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from './config.json';// the file exported from IcoMoon

const getPath = (iconName) => {
  const icon = iconPaths.icons.find((icon) => (icon.properties.name === iconName));
  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`); // eslint-disable-line no-console
    return '';
  }
};

const Icon = ({size = '20', name, fill = '#000', ...extraProps}) => (
  <svg {...extraProps} width={size} height={size} viewBox="0 0 1024 1024" fill={fill}>
    <path d={getPath(name)} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string
};

export default Icon;
