import React from 'react';
import styled from 'styled-components';

function Card( {id, path, name, clickCard} ) {


    return (
        <StyledCard onClick={() => {
            clickCard(id);
        }}>
            <Image src={path} alt={name}/>
            <Breaker />
            <p> {name} </p>
        </StyledCard>
    )
}

const Image = styled.img`
    width: 128px;
    height: 128px;
    @media (max-width: 1500px) {
        width: 88px;
        height: 88px;
    }
`;


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    width: 150px;
    p {
        text-align: center;
    }
    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
    &:active, &:focus {
        transform: scale(0.98);
        cursor: pointer;
    }
`;

const Breaker = styled.div`
    width: 100%;
    height: 4px;
    background-color: black;
`;



export default Card;