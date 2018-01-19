// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import playerSDK from './app/utils/playerSDK';

global.playerSDK = playerSDK; // setting a global sdk for use in third party plugins

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
