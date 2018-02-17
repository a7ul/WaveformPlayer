import styled from 'styled-components';
import { colors, fonts } from '../../../../styles/constants';
import measurements from '../../../../styles/measurements';
import Icon from '../../../../components/Icon';

export const Container = styled.div`
  display: flex;
  padding: ${measurements.CONTAINER_PADDING};
  padding-right: 5px;
  align-self: stretch;
  justify-content: space-between; 
  flex-direction: row;
  border-bottom: 1px solid ${colors.LIGHT_SHADOW};
`;

export const Title = styled.p`
  display: flex;
  flex-grow: 1;
  padding: 10px 0;
  color: ${colors.PRIMARY};
  font-size: ${fonts.LARGE_SIZE};
  font-weight: ${fonts.MEDIUM_WEIGHT};
`;

export const HideSideBarIcon = styled(Icon)`
  display: flex;
  padding: 10px 5px 10px 10px;
  cursor: pointer;
  fill: ${colors.DARK};
`;
