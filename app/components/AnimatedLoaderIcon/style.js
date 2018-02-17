import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '../../styles/constants';

const Polyline = styled.polyline`
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
`;

const dashKeyFrames = keyframes`
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const BackPolyline = Polyline.extend`
  stroke: ${transparentize(0.7, colors.PRIMARY)};
`;
export const FrontPolyline = Polyline.extend`
  stroke: ${colors.PRIMARY};
  stroke-dasharray: 12, 36;
  stroke-dashoffset: 48;
  animation: ${(props) => (props.shouldAnimate ? `${dashKeyFrames} 1s linear infinite;` : 'none')}
`;
