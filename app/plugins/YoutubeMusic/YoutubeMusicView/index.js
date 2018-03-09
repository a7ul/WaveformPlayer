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
  onStartLoad = (evt) => {
    this.props.setProgress(true);
    this.props.setCurrentUrl(evt.target.src);
  }
  onStopLoad = () => {
    this.props.setProgress(false);
    const { history } = this.webViewDOM.getWebContents();
    this.webViewDOM.getWebContents().history = uniq(history); // fix for dual history incase of some sites like youtube
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
  onDownloadPress = () => {

  }
  onRefreshPress = () => {
    try {
      this.webViewDOM.reload();
    } catch (err) {
      console.log(err);
    }
  }

  setAddress = (url) => {
    try {
      this.webViewDOM.loadURL(normalizeUrl(url));
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
          onDownloadPress={undefined}
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
