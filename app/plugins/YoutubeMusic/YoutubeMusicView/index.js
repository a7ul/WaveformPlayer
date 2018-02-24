/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';
import * as styles from './style';
import * as actions from '../redux';
import TopBar from './components/TopBar';
import { PLUGIN_ID } from '../config';

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
  }
  onStopLoad = () => {
    this.props.setProgress(false);
    const { history } = this.webViewDOM.getWebContents();
    this.webViewDOM.getWebContents().history = uniq(history); // fix for dual history incase of some sites like youtube
    console.log(this.webViewDOM, this.webViewDOM.getWebContents().history);
  }
  onDidNavigateInPage = (evt) => {
    this.props.setCurrentUrl(evt.url);
  }
  onDidNavigate = (evt) => {
    this.props.setCurrentUrl(evt.url);
  }
  onBackPress = () => {
    this.webViewDOM.goBack();
  }
  onNextPress = () => this.webViewDOM.goNext()

  webview = null;

  render() {
    return (
      <styles.Container>
        <TopBar
          onBackPress={this.onBackPress}
          onNextPress={this.onNextPress}
          onHomePress
          onRefreshPress
          onDownloadPress
          submitAddress={this.props.setCurrentUrl}
          inProgress={this.props.inProgress}
          currentAddress={this.props.currentUrl}
        />
        <styles.WebView innerRef={(comp) => { this.webview = comp; }} src={this.props.currentUrl} />
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
  currentUrl: state.plugins[PLUGIN_ID].currentUrl,
  inProgress: state.plugins[PLUGIN_ID].inProgress
});

const mapDispatchToProps = (dispatch) => ({
  closeSideMenu: () => dispatch(actions.sideMenuToggle(false)),
  setCurrentUrl: (url) => dispatch(actions.setCurretUrl(url)),
  setProgress: (inProgress) => dispatch(actions.setProgress(inProgress))
});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeMusicView);
