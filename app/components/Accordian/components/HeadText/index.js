import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

class HeadText extends React.Component {
  render() {
    const { toggle, ...extraProps } = this.props;
    return (
      <styles.HeadText {...extraProps}>
        <button onClick={() => toggle()}>CLICK</button>
        {this.props.text}
      </styles.HeadText>
    );
  }
}
HeadText.defaultProps = {
  text: ''
};
HeadText.propTypes = {
  text: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
};
export default HeadText;
