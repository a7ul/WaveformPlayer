import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import * as styles from './style';
import { DROPPABLE_IDS, DRAGGABLE_TYPES } from '../../config/editableLayout';

class SideBar extends React.Component {
  getDraggableSideMenuItem = (sideMenuItem, index) => {
    const { pluginId, label } = sideMenuItem;

    return (
      <Draggable key={pluginId} draggableId={pluginId} type={DRAGGABLE_TYPES.SIDEBAR_ITEM} index={index}>
        {
          (provided/* , snapshot */) => (
            <div>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <h4>{label}</h4>
              </div>
              {provided.placeholder}
            </div>
          )
       }
      </Draggable>
    );
  }

  render() {
    const { editable, sideMenuItems } = this.props;
    return (
      <Droppable droppableId={DROPPABLE_IDS.SIDEBAR} type={DRAGGABLE_TYPES.SIDEBAR_ITEM} direction="vertical" isDropDisabled={!editable}>
        {
          (provided, snapshot) => (
            <styles.Container
              isDraggingOver={snapshot.isDraggingOver}
              innerRef={provided.innerRef}
            >
              {
                sideMenuItems.map((sideMenuItem, index) => this.getDraggableSideMenuItem(sideMenuItem, index))
              }
              {provided.placeholder}
            </styles.Container>
        )}
      </Droppable>
    );
  }
}

SideBar.defaultProps = {
  editable: false,
  sideMenuItems: []
};

SideBar.propTypes = {
  editable: PropTypes.bool,
  sideMenuItems: PropTypes.array
};

const mapStateToProps = (state) => ({
  sideMenuItems: state.sideMenu.items,
  editable: state.sideMenu.editable
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
