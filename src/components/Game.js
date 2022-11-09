import React from 'react';
import { useState } from 'react';
import { cards, shuffleCards } from '../utils/data';
import styled from 'styled-components';
import Card from './Card';

function Game( {score, bestScore, handleScore, handleBestScore, handleIsOver} ) {

    const [cardsSet, setCardsSet] = useState(new Set());

    function clickCard(id) {
        if(cardsSet.has(id)) {
            handleIsOver();
            if(score > bestScore)
                handleBestScore(score);
            setCardsSet(new Set());
        }
        else {
            handleScore(score + 1);
            setCardsSet(s => s.add(id));
        }
    }

    return (
        <ChildComponent cards={cards} clickCard={clickCard}/>
    )
}


function ChildComponent({cards, clickCard}) {
    let shuffle = shuffleCards(cards);
    let children = [];
    children = shuffle.map(card => 
             <Card key={card.id} id={card.id} path={card.path} name={card.name} clickCard={clickCard} />);

    return (
        <Grid>
            {children}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 36px;
    margin-top: 56px;
    @media (max-width: 1500px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;


export default Game;