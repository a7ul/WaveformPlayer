import styled from 'styled-components';

export const Container = styled.div`
  background: beige;
  overflow:hidden;
`;

export const Body = styled.div`
  background: yellowgreen;
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  transition: display 1s;
`;
