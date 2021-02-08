//import Background from '../MovieCard/image-not-found.jpg';
import styled, {css} from 'styled-components';

export const StyledImg = styled.div`
    ${(props) =>
    css`
        flex-basis: 200px;
        flex-shrink: 0;
        height: 300px;
        margin-right: 20px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${props.src});
        background-color: #585858;
    `}
`;
