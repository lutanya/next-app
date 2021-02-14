import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #232323;
    height: 400px;
    padding: 2% 5%;
    font-size: 130%;
    p {
        font-size: 2em;
        padding: 1% 5%; 
        position:  absolute;
        font-weight: 100;
    }
`;

export const SearchArea = styled.div`
    position:  absolute;
    padding: 11% 5%; 
    > input {
        width: 700px;
        padding: 0.8em 1em;
        font-size: inherit;
        border:none;
        border-radius: 4px; 
        background-color: #555555;
        color: #FFFFFF;
        margin-right: 20px 
}
`;

export const StyledAddButton = css`
    position: absolute;
    right: 450px; top: 80px;
`;
