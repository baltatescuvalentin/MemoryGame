import React from 'react';
import styled from 'styled-components';

function Scoreboard({ score, bestScore }) {
    return (
        <FlexDiv>
            <ScoreDiv> Score: {score} </ScoreDiv>
            <ScoreDiv> Best Score: {bestScore} </ScoreDiv>
        </FlexDiv>
    )
}

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
`;

const ScoreDiv = styled.div`
    height: 85px;
    width: 400px;
    background-color: var(--bg-color);
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export default Scoreboard;