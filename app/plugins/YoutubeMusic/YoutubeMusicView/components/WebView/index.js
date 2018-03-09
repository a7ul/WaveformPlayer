import React from 'react';

class WebView extends React.PureComponent {
  render() {
    return <webview {...this.props} />;
  }
}
WebView.defaultProps = {
};
WebView.propTypes = {
};
export default WebView;
