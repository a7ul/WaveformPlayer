import styled from 'styled-components';
import { measurements, colors } from '../../../../styles/constants';

export const Container = styled.div`
  display: flex;
  background-color: ${colors.SECONDARY}; 
  min-width: ${measurements.SIDEBAR_WIDTH};
`;

