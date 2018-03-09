import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const DraggableContainer = styled.div`
   box-shadow: 0 0 1px 0 rgba(1,1,1,0.15);
   padding: 10px 0;
`;

export const addDraggable = (draggableOptions) => (WrappedComponent) => {
  const DraggableHOC = (props) => (
    <Draggable {...draggableOptions} >
      {
        (provided/* , snapshot */) => (
          <DraggableContainer>
            <div key="accordian" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <WrappedComponent {...props} />
            </div>
            {provided.placeholder}
          </DraggableContainer>
        )
      }
    </Draggable>
  );
  return DraggableHOC;
};
