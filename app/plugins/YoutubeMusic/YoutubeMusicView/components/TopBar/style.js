import styled from 'styled-components';
import { colors, fonts } from '../../../../../styles/constants';
import Icon from '../../../../../components/Icon';
import AnimatedLoader from '../../../../../components/AnimatedLoader';

export const Container = styled.div`
 display: flex;
 padding: 5px;
 align-self: stretch;
 justify-content:space-between;
 background-color: ${colors.DARK};
`;
export const PreAddress = styled.div`
 display: flex;
 padding-left: 25px;
`;
export const AddressContainer = styled.div`
 display: flex;
 flex: 1;
 align-items: center;
 justify-content: space-between;
 padding: 0 10px;
`;
export const PostAddress = styled.div`
 display: flex;
 width: 50px;
`;

const IconStyle = styled(Icon)`
 padding: 5px;
 fill: ${colors.LIGHT_BACKGROUND};
`;
export const BackIcon = IconStyle.extend`
`;
export const NextIcon = IconStyle.extend`
 transform: rotateZ(180deg);
`;
export const RefreshIcon = IconStyle.extend`
`;
export const HomeIcon = IconStyle.extend`
`;
export const DownloadIcon = IconStyle.extend`
`;
export const AddressBar = styled.input`
 display: flex;
 flex-grow: 1;
 height: 20px;
 border-radius: 5px;
 border: 1px solid ${colors.LIGHT_SHADOW};
 font-size: ${fonts.SMALL_SIZE};
 font-weight: ${fonts.BOLD_WEIGHT};
 padding: 0 10px;
`;
export const Progress = styled(AnimatedLoader)`
  padding: 0px 10px 10px;
  align-self: center;
  opacity: ${(props) => props.opacity};
`;
