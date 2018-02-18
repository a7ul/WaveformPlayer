import styled from 'styled-components';
import Icon from '../../../../../../components/Icon';
import { colors } from '../../../../../../styles/constants';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  padding: 10px;
  border: 1px solid ${colors.LIGHT_SHADOW};
  justify-content: space-between;
`;

export const ExpanderIcon = styled(Icon)`
  transform: rotateZ(${(props) => (props['data-collapsed'] ? 0 : '180deg')});
  transition: transform 0.2s linear;
  opacity: ${(props) => (props['data-show'] ? 1 : 0)}
`;
