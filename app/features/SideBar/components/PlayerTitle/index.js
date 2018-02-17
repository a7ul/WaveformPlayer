import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import { PLAYER_NAME } from '../../../../config/constants';

class PlayerTitle extends React.PureComponent {
  hideSideMenu = () => {
    this.props.setSideMenuVisibility(false);
  }
  render() {
    return (
      <styles.Container>
        <styles.Title>{PLAYER_NAME} </styles.Title>
        <styles.HideSideBarIcon size={20} name="first_page" onClick={this.hideSideMenu} />
      </styles.Container>
    );
  }
}

PlayerTitle.defaultProps = {

};

PlayerTitle.propTypes = {
  setSideMenuVisibility: PropTypes.func.isRequired
};


export default PlayerTitle;
