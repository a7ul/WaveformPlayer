import React from 'react';
import {Provider} from 'react-redux';
import {initStore} from './store/store';
import App from './AppContainer';

const store = initStore({});

class YPlayer extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default YPlayer;
