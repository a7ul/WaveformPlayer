import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  min-width: 250px;
  box-shadow: 0px -5px 20px 5px #e4e1e1;
  background-color: ${(props) => (props.isDraggingOver ? 'blue' : 'grey')}}
}
`;

