import React from 'react';
import { connect } from 'react-redux';
import * as styles from './style';

class SideBar extends React.Component {
  render() {
    return (
      <styles.Container />
    );
  }
}

SideBar.defaultProps = {

};

SideBar.propTypes = {

};

const mapStateToProps = (state) => ({
  plugins: state.pluginLoader.plugins
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
