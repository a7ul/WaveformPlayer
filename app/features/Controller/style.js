import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const Container = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  min-height: 80px;
  background: ${colors.PRIMARY};
`;
