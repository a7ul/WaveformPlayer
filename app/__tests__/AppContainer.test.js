import React from 'react';
import ReactDOM from 'react-dom';
import App from '../AppContainer';

jest.mock('react-dom');
jest.mock('../utils/audio.js');
jest.mock('../redux/store.js', () => ({
  store: {
    dispatch: jest.fn()
  }
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
