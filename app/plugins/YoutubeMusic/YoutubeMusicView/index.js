import React from 'react';
import { connect } from 'react-redux';
import * as styles from './style';


class YoutubeMusicView extends React.Component {
  render() {
    return (
      <styles.WebView id="foo" src="https://www.youtube.com/" />
    );
  }
}

YoutubeMusicView.defaultProps = {

};

YoutubeMusicView.propTypes = {

};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeMusicView);
