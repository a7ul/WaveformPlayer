import React from 'react';
import { connect } from 'react-redux';

class YoutubeMusicView extends React.Component {
  render() {
    return (
      <div>
       YOUTUBE
      </div>
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
