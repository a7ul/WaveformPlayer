import React from 'react';
import styled from 'styled-components';

const webView = (props) => <webview {...props} />;

export const WebView = styled(webView)`
  display: flex;
  flex: 1;
  align-self:'stretch';
`;

