import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import { colors } from '../../../../../styles/constants';
import { noop } from '../../../../../utils/common';

class TopBar extends React.Component {
  state = {
    address: ''
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentAddress !== this.state.address) {
      this.setState((prevState) => ({ ...prevState, address: this.props.currentAddress }));
    }
  }
  setAddress = (address) => {
    this.setState((prevState) => ({ ...prevState, address }));
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.submitAddress(this.state.address);
    }
  }
  render() {
    const { onBackPress, onNextPress, onRefreshPress, onHomePress, inProgress, onDownloadPress } = this.props;
    return (
      <styles.Container>
        <styles.PreAddress>
          <styles.BackIcon onClick={onBackPress} name="keyboard_backspace" size={20} />
          <styles.NextIcon onClick={onNextPress} name="keyboard_backspace" size={20} />
          <styles.RefreshIcon onClick={onRefreshPress} name="replay" size={20} />
          <styles.HomeIcon onClick={onHomePress} name="home" size={20} />
        </styles.PreAddress>
        <styles.AddressContainer>
          <styles.AddressBar onChange={(evt) => this.setAddress(evt.target.value)} onKeyPress={this.handleKeyPress} type="text" value={this.state.address} />
          <styles.Progress size={9} color={colors.LIGHT_SHADOW} opacity={inProgress ? 1 : 0} />
        </styles.AddressContainer>
        <styles.PostAddress >
          <styles.DownloadIcon onClick={onDownloadPress} name="vertical_align_bottom" size={20} />
        </styles.PostAddress>
      </styles.Container>
    );
  }
}
TopBar.defaultProps = {
  onBackPress: noop,
  onNextPress: noop,
  onHomePress: noop,
  onRefreshPress: noop,
  onDownloadPress: noop,
  submitAddress: noop,
  inProgress: false,
  currentAddress: ''
};
TopBar.propTypes = {
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
  onHomePress: PropTypes.func,
  onRefreshPress: PropTypes.func,
  onDownloadPress: PropTypes.func,
  submitAddress: PropTypes.func,
  inProgress: PropTypes.bool,
  currentAddress: PropTypes.string
};
export default TopBar;
