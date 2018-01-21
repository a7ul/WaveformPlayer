import React from 'react';
import * as styles from './style';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class Playlist extends React.Component {
  render () {
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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
