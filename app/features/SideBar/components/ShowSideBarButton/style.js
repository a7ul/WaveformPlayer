import styled from 'styled-components';
import { opacify } from 'polished';
import { colors } from '../../../../styles/constants';
import Icon from '../../../../components/Icon';

export const Container = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  opacity:${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  background-color: ${opacify(0.5, colors.LIGHT_BACKGROUND)};
  padding: 0 5px 0 0;
  z-index: 1;
  box-shadow: 0px 0px 2px 2px ${colors.LIGHT_SHADOW};
  top: 5px;
  border: 1px solid ${colors.LIGHT_SHADOW};
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;

export const ShowSideBarIcon = styled(Icon)`
  padding: 10px 0 10px 10px;
  cursor: pointer;
  fill: ${colors.DARK};
`;
