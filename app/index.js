import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import App from './AppContainer';
import playerSDK from './utils/playerSDK';

class YPlayer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

global.playerSDK = playerSDK; // setting a global sdk for use in third party plugins

ReactDOM.render(
  <YPlayer />,
  document.getElementById('root')
);
