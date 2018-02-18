import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../../../components/Icon';

class SideMenuAccordianHead extends React.Component {
  render() {
    const { toggle, expanded, ...sideMenuProps } = this.props;
    const { label, action, click, icon, component } = sideMenuProps;
    return (
      <div>{icon ? <Icon size={20} name={icon} /> : null}
        <div onClick={() => toggle()}>{label}</div>
      </div>
    );
  }
}
SideMenuAccordianHead.defaultProps = {
};
SideMenuAccordianHead.propTypes = {
};
export default SideMenuAccordianHead;
