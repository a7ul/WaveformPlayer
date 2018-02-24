import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
`;
export const addDroppable = (droppableOptions) => (WrappedComponent) => {
  const droppableHOC = (props) => (
    <Droppable {...droppableOptions} >
      {
          (provided, snapshot) => (
            <Container isDraggingOver={snapshot.isDraggingOver} innerRef={provided.innerRef}>
              <WrappedComponent {...props} />
              {provided.placeholder}
            </Container>
          )
      }
    </Droppable>
  );
  return droppableHOC;
};

