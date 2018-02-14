import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import * as styles from './style';
import { DROPPABLE_IDS, DRAGGABLE_TYPES } from '../../config/editableLayout';

class SideBar extends React.Component {
  getDraggable = (draggableId) => (
    <Draggable draggableId={draggableId} type={DRAGGABLE_TYPES.SIDEBAR_ITEM} index={0}>
      {
        (provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h4>{draggableId}</h4>
            </div>
            {provided.placeholder}
          </div>
        )
    }
    </Draggable>
  )
  render() {
    return (
      <Droppable droppableId={DROPPABLE_IDS.SIDEBAR} type={DRAGGABLE_TYPES.SIDEBAR_ITEM} direction="vertical" isDropDisabled={false}>
        {
          (provided, snapshot) => (
            <styles.Container
              innerRef={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            >
              <h2>I am a droppable!</h2>
              {this.getDraggable(`${DRAGGABLE_TYPES.SIDEBAR_ITEM}-1`)}
              {this.getDraggable(`${DRAGGABLE_TYPES.SIDEBAR_ITEM}-2`)}
              {this.getDraggable(`${DRAGGABLE_TYPES.SIDEBAR_ITEM}-3`)}
              {this.getDraggable(`${DRAGGABLE_TYPES.SIDEBAR_ITEM}-4`)}
              {provided.placeholder}
            </styles.Container>
        )}
      </Droppable>
    );
  }
}

SideBar.defaultProps = {

};

SideBar.propTypes = {

};

const mapStateToProps = (state) => ({
  plugins: state.pluginLoader.plugins
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
