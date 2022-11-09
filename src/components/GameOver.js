import React from 'react';
import styled from 'styled-components';

function GameOver( {score, bestScore, isOver, handleIsOver, handleScore} ) {
    return (
        isOver &&
            <Modal>
                <h1> Game Over </h1>
                <p> Your Score is: {score} </p>
                <p> Your current Best Score is: {bestScore} </p>
                <Button onClick={() => {
                    handleIsOver();
                    handleScore(0);
                }}> New Game </Button>
            </Modal>
    )
}

const Modal = styled.div`
    top: 0;
    min-width: 100vw;
    min-height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: var(--bg-color);
    color: white;

    p {
        font-size: 20px;
    }
`;

const Button = styled.button`
    border: none;
    height: 75px;
    width: 350px;
    background-color: var(--new-game-btn);
    &:hover {
        transform: scale(1.05);
    }
    &:active, &:focus {
        transform: scale(0.98);
    }
    font-size: 32px;
    font-family: var(--text-style);
    color: white;
    box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;
    border-radius: 12px;
`;


export default GameOver;