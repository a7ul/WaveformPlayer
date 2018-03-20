import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Router } from './router';
import playerSDK from './utils/playerSDK';

global.playerSDK = playerSDK; // setting a global sdk for use in third party plugins

class App extends React.Component {
  onDragStart = (data) => {
    console.log('FIRED START', data);
  };
  onDragEnd = (data) => {
    console.log('FIRED END', data);
  };
  render() {
    return (
      <Provider store={store}>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <Router />
        </DragDropContext>
      </Provider>

    );
  }
}

App.defaultProps = {};

App.propTypes = {};


export default App;
