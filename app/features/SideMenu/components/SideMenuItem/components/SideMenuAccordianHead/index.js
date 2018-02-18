import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../../../../../../components/Icon';
import ErrorBoundary from '../../../../../../components/ErrorBoundary';
import * as styles from './style';

class SideMenuAccordianHead extends React.Component {
  onHeadClick = () => {
    const { action, click, toggle, submenu, actionDispatcher } = this.props;
    if (submenu) {
      return toggle();
    } else if (click) {
      return click();
    } else if (action) {
      return actionDispatcher(action);
    }
    return null;
  }

  render() {
    const { component, submenu, expanded, label, icon } = this.props;

    return (
      component
        ? (<ErrorBoundary><component /></ErrorBoundary>)
        : (
          <styles.Container onClick={this.onHeadClick}>
            <div> {icon ? <Icon size={20} name={icon} /> : null} </div>
            <div>{label}</div>
            <styles.ExpanderIcon data-show={submenu} data-collapsed={!expanded} name="expand_more" size={20} />
          </styles.Container>
        )
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
