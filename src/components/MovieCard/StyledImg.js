// import Background from './image-not-found.jpg';
import styled, { css } from 'styled-components';

const StyledImg = styled.div`
    ${(props) => css`
        float: left;
        width: 330px;
        height: 495px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${props.src});
        background-color: #585858;
    `}
`;

export { StyledImg as default };
