import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

class ShowSideBarButton extends React.PureComponent {
  showSideMenu = () => this.props.setSideMenuVisibility(true);

  render() {
    const { visible } = this.props;
    return (
      <styles.Container visible={visible}>
        <styles.ShowSideBarIcon size={20} name="last_page" onClick={this.showSideMenu} />
      </styles.Container>
    );
  }
}


ShowSideBarButton.propTypes = {
  visible: PropTypes.bool.isRequired,
  setSideMenuVisibility: PropTypes.func.isRequired
};

export default ShowSideBarButton;
