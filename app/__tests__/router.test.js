import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router } from '../router';

jest.mock('../utils/audio.js');

const store = createStore(() => ({}));
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
