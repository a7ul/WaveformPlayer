import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { DRAGGABLE_TYPES } from '../../../../config/editableLayout';

const SideMenuItem = (props) => {
  const { sideMenu, index, isDraggable } = props;
  const { pluginId } = sideMenu;
  return (
    <Draggable key={pluginId} draggableId={pluginId} type={DRAGGABLE_TYPES.SIDEBAR_ITEM} isDragDisabled={!isDraggable} index={index}>
      {
        (provided/* , snapshot */) => (
          <div>
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
              <h4>{sideMenu.label}</h4>
            </div>
            {provided.placeholder}
          </div>
        )
     }
    </Draggable>
  );
};

SideMenuItem.defaultProps = {
  isDraggable: false
};

SideMenuItem.propTypes = {
  sideMenu: PropTypes.shape({
    label: PropTypes.string.isRequired,
    pluginId: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isDraggable: PropTypes.bool
};


export default SideMenuItem;
