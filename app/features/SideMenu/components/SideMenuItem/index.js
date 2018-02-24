import React from 'react';
import PropTypes from 'prop-types';
import Accordian from 'react-super-accordion';
import SideMenuAccordianHead from './components/SideMenuAccordianHead';
import * as styles from './style';

class SideMenuItem extends React.Component {
  getHeadComponent = (sideMenuProps) => (accordianProps) => (
    <SideMenuAccordianHead {...accordianProps} {...sideMenuProps} />
  )
  render() {
    const { submenu } = this.props;
    return (
      <Accordian headComponent={this.getHeadComponent(this.props)}>
        <styles.Group>
          {submenu ? submenu.map((eachSubMenu) => <SideMenuItem key={eachSubMenu.label} {...eachSubMenu} />) : null}
        </styles.Group>
      </Accordian>
    );
  }
}

SideMenuItem.defaultProps = {
  icon: '',
  label: '',
  submenu: null
};
SideMenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  submenu: PropTypes.array
};
export default SideMenuItem;
