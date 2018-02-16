import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Router } from './router';

class App extends React.Component {
  onDragStart = (data) => {
    console.log('FIRED START', data);
    /* ... */
  };
  onDragEnd = (data) => {
    console.log('FIRED END', data);

    /* ... */
  };
  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Router />
      </DragDropContext>
    );
  }
}

App.defaultProps = {
};

App.propTypes = {
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
