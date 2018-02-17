import styled from 'styled-components';
import { measurements, colors } from '../../styles/constants';

export const Container = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  width: ${(props) => (props.visible ? measurements.SIDEBAR_WIDTH : 0)};
  transition: 0.3s;
  overflow-x: hidden;
  opacity:${(props) => (props.visible ? 1 : 0)};
  z-index: 2;
  box-shadow: 0px -3px 2px 2px ${colors.LIGHT_SHADOW};
  background-color: ${(props) => {
    if (!props.editEnabled) {
      return colors.LIGHT_BACKGROUND;
    }
    return props.isDraggingOver ? 'blue' : 'grey'; // TODO CHANGE THESE COLORS
  }}
`;
