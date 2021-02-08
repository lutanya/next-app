import styled from 'styled-components';

export const StyledMovieCard = styled.div`
    margin: 5px;
    float: left;
    width: 325px;
    height: 606px;
    margin-right: 50px;   
   
`;

export const StyledDescription = styled.div`
    width: 325px;
    padding-bottom: 15px;
    text-align: left;
    position: relative;
    > h3 {
        font-weight:normal;
        margin-bottom: 5px;
    }
    > p {
        margin-top: 18px;
    }
    > div {
        position: absolute;
        right: 0; bottom: 55px;
        border: solid #FFFFFF 1px;
        border-radius: 4px;
        padding: 4px 12px;
    }
`;
