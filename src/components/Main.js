import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Scoreboard from './Scoreboard';
import GameOver from './GameOver';
import Game from './Game';

function Main() {

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isOver, setIsOver] = useState(false);

    function handleSetScore(score) {
        setScore(score);
    }

    function handleSetBestScore(score) {
        setBestScore(score);
    }

    function handleSetIsOver() {
        setIsOver(o => !o);
    }
    
    return (
        <main>
            <Scoreboard score={score} bestScore={bestScore} />
            <Game 
                score={score} 
                bestScore={bestScore} 
                handleIsOver={handleSetIsOver} 
                handleScore={handleSetScore}
                handleBestScore={handleSetBestScore}
            />
            <GameOver 
                score={score} 
                bestScore={bestScore} 
                isOver={isOver} 
                handleIsOver={handleSetIsOver} 
                handleScore={handleSetScore}
                />
        </main>
    )
}

export default Main;