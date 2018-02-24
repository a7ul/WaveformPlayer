import styled from 'styled-components';
import Icon from '../../../../../../components/Icon';
import { colors } from '../../../../../../styles/constants';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ExpanderIcon = styled(Icon)`
  transform: rotateZ(${(props) => (props['data-collapsed'] ? 0 : '180deg')});
  transition: transform 0.2s linear;
  opacity: ${(props) => (props['data-show'] ? 1 : 0)};
  align-self: center;
  padding: 0 10px;
`;

export const ItemIcon = styled(Icon)`
  fill: ${colors.DARK};
  width: 60px;
`;

export const Label = styled.div`
  padding: 10px 0;
  flex-grow: 1;
  font-size: 15px;
  font-weight: 400;
`;
