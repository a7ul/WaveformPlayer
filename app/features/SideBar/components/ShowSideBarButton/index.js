import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const ShowSideBarButton = (props) => {
  const showSideMenu = () => props.setSideMenuVisibility(true);
  return (
    <styles.Container visible={props.visible}>
      <styles.ShowSideBarIcon size={20} name="last_page" onClick={showSideMenu} />
    </styles.Container>
  );
};


ShowSideBarButton.propTypes = {
  visible: PropTypes.bool.isRequired,
  setSideMenuVisibility: PropTypes.func.isRequired
};

export default ShowSideBarButton;
