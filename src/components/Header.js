import React from 'react';
import styled from 'styled-components';
import Logo from '../utils/Logo';

function Header() {

    return (
        <StyledHeader>
            <StyledDiv>
                <p>Memory </p>
                <p>Duels of</p>
            </StyledDiv>
            <Logo />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    height: 100px;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color);
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 32px;
        margin: 4px;
        color: whitesmoke;
    }
`;


export default Header;