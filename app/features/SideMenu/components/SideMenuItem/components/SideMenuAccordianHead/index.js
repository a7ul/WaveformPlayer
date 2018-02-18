import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../../../../../../components/Icon';
import { noop } from '../../../../../../utils/common';
import ErrorBoundary from '../../../../../../components/ErrorBoundary';

class SideMenuAccordianHead extends React.Component {
  onHeadClick = () => {
    const { actionDispatcher, action, click } = this.props;
    const actionHandler = () => actionDispatcher(action);
    return click || (action ? actionHandler : noop);
  }
  customComponentRenderer = () => {
    const { component: CustomComponent } = this.props;
    return <ErrorBoundary><CustomComponent /></ErrorBoundary>;
  }
  render() {
    const { toggle, expanded, component, label, icon, submenu } = this.props;
    const expansionSymbol = (expanded ? '-' : '+');
    const onHeadClick = submenu ? noop : this.getOnHeadClick;
    return (
      component ? this.customComponentRenderer() :
      <div onClick={onHeadClick}>
        {icon ? <Icon size={20} name={icon} /> : null}
        {submenu ? expansionSymbol : null}
        <div style={{ border: '1px solid black', padding: 10 }} onClick={() => toggle()}>{label}</div>
      </div>
    );
  }
}
SideMenuAccordianHead.defaultProps = {
  action: null,
  click: null,
  submenu: null,
  icon: null,
  label: null,
  component: null
};
SideMenuAccordianHead.propTypes = {
  toggle: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  submenu: PropTypes.array,
  component: PropTypes.func,
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    type: PropTypes.string.isRequired
  })]),
  click: PropTypes.func,
  actionDispatcher: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => ({
  actionDispatcher: (action) => dispatch(action)
});
export default connect(null, mapDispatchToProps)(SideMenuAccordianHead);
