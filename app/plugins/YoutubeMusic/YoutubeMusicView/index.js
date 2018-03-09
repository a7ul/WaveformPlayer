/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';
import * as styles from './style';
import * as topBarActions from '../redux/topbar';
import TopBar from './components/TopBar';
import { PLUGIN_ID, HOME_PAGE_URL } from '../config';
import { normalizeUrl } from '../util';

class YoutubeMusicView extends React.PureComponent {
  componentDidMount() {
    this.webViewDOM = ReactDOM.findDOMNode(this.webview); // eslint-disable-line react/no-find-dom-node
    this.webViewDOM.addEventListener('did-start-loading', this.onStartLoad);
    this.webViewDOM.addEventListener('did-stop-loading', this.onStopLoad);
    this.webViewDOM.addEventListener('did-navigate-in-page', this.onDidNavigateInPage);
    this.webViewDOM.addEventListener('did-navigate', this.onDidNavigate);
    this.props.closeSideMenu();
  }
  onStartLoad = () => {
    this.props.setProgress(true);
    // console.log(evt.target.src, 'CURRENT');
  }
  onStopLoad = (evt) => {
    this.props.setProgress(false);
    this.props.setCurrentUrl(evt.target.src);
  }
  onDidNavigateInPage = (evt) => {
    this.props.setCurrentUrl(evt.url);
  }
  onDidNavigate = (evt) => {
    this.props.setCurrentUrl(evt.url);
  }
  onBackPress = () => {
    try {
      this.webViewDOM.goBack();
    } catch (err) {
      console.log(err);
    }
  }
  onNextPress = () => {
    try {
      this.webViewDOM.goForward();
    } catch (err) {
      console.log(err);
    }
  }
  onHomePress = () => {
    this.setAddress(HOME_PAGE_URL);
  }
  onRefreshPress = () => {
    try {
      this.webViewDOM.reload();
    } catch (err) {
      console.log(err);
    }
  }
  onDownloadPress = () => {
    // TODO
  }
  setAddress = (url) => {
    try {
      const currentUrl = normalizeUrl(url);
      this.webViewDOM.loadURL(currentUrl);
      this.props.setCurrentUrl(currentUrl);
    } catch (err) {
      console.log(err);
    }
  }
  webview = null;

  render() {
    return (
      <styles.Container>
        <TopBar
          onBackPress={this.onBackPress}
          onNextPress={this.onNextPress}
          onHomePress={this.onHomePress}
          onRefreshPress={this.onRefreshPress}
          onDownloadPress={this.onDownloadPress}
          submitAddress={this.setAddress}
          inProgress={this.props.inProgress}
          currentAddress={this.props.currentUrl}
        />
        <styles.WebView innerRef={(comp) => { this.webview = comp; }} src={HOME_PAGE_URL} />
      </styles.Container>
    );
  }
}

YoutubeMusicView.defaultProps = {
  currentUrl: '',
  inProgress: false
};

YoutubeMusicView.propTypes = {
  closeSideMenu: PropTypes.func.isRequired,
  setCurrentUrl: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  currentUrl: PropTypes.string,
  inProgress: PropTypes.bool
};

const mapStateToProps = (state) => ({
  currentUrl: state.plugins[PLUGIN_ID].topbar.currentUrl,
  inProgress: state.plugins[PLUGIN_ID].topbar.inProgress
});

const mapDispatchToProps = (dispatch) => ({
  closeSideMenu: () => dispatch(topBarActions.sideMenuToggle(false)),
  setCurrentUrl: (url) => dispatch(topBarActions.setCurretUrl(normalizeUrl(url))),
  setProgress: (inProgress) => dispatch(topBarActions.setProgress(inProgress))
});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeMusicView);
