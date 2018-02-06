import React from 'react';
import { connect } from 'react-redux';
import * as styles from './style';

class Playlist extends React.Component {
  render() {
    return (
      <styles.Container>
          Hi
      </styles.Container>
    );
  }
}

Playlist.defaultProps = {

};

Playlist.propTypes = {

};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
