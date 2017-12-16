import './styles/global.css';
import React from 'react';
import {Provider} from 'react-redux';
import Router from './router';
import {initStore} from './store/store';

const store = initStore({});

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
