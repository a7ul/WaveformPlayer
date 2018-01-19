import React from 'react';
import styles from './style.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class Playlist extends React.Component {
  render () {
    return (
      <div className={styles.playlist}>
          Hi
      </div>
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
