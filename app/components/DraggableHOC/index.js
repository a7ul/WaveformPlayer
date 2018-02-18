import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const addDraggable = (draggableOptions) => (WrappedComponent) => {
  const DraggableHOC = (props) => (
    <Draggable {...draggableOptions} >
      {
        (provided/* , snapshot */) => (
          <div>
            <div key="accordian" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <WrappedComponent {...props} />
            </div>
            {provided.placeholder}
          </div>)
      }
    </Draggable>
  );
  return DraggableHOC;
};
