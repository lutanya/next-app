import styled, {css} from 'styled-components';

export const StyledButton = styled('button')`
    background: #555555;
    border: none;
    border-radius: 4px;  
    color: #F65261;
    padding: 0.5em 1em;
    font-size: inherit;
    ${(props) => props.colored &&
    css`
        background: #F65261;
        color: #FFFFFF;
        padding: 0.8em 0;
        width:240px; 
        border: solid 2px #F65261; 
    `}
    ${(props) => props.position}
    ${(props) => props.empty &&
    css`
        background: #232323;
        border: solid 2px #F65261;
        color: #F65261;  
        padding: 0.8em 1em;
    `}
`;

export const StyledResetButton = css`
    position: absolute;
    width: 180px;  
    bottom: 70px; right:300px;
    font-size: 16px;

`;

export const StyledSubmitButton = css`
    position: absolute;  
    bottom: 70px; right:100px;
    width: 180px; 
    font-size: 16px;
`;
