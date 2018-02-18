import React from 'react';
import PropTypes from 'prop-types';
import Accordian from '../../../../components/Accordian';
import SideMenuAccordianHead from './components/SideMenuAccordianHead';

class SideMenuItem extends React.Component {
  getHeadComponent = (otherSideMenu) => (accordianProps) => (
    <SideMenuAccordianHead {...accordianProps} {...otherSideMenu} />
  )
  render() {
    const { submenu, ...otherSideMenu } = this.props;
    return (
      <Accordian headComponent={this.getHeadComponent(otherSideMenu)}>
        {submenu ? submenu.map((eachSubMenu) => <SideMenuItem key={eachSubMenu.label} {...eachSubMenu} />) : null}
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
