import React, { useState, useEffect } from 'react';
import { words } from '../vocab';

const Gameboard = () => {
  const [word, setWord] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);

  const wordGetter = () => {
    setWord(words.splice(Math.floor(Math.random() * words.length), 1)[0].split(''));
  }

  const handleClick = () => {
    wordGetter();
    setCorrectGuesses([])
  }

  const handleKeyUp = e => {
    if (word.includes(e.key)) {
      setCorrectGuesses([...correctGuesses, e.key])
    }
  }

  useEffect(() => {
    document.body.addEventListener('keyup', event => {
      handleKeyUp(event);
    })
  }, [])

  console.log(word, correctGuesses);
  return (
    <div className="gameboard">
      <button onClick={handleClick}>CLICK ME!</button>
      <h3>Guess a letter!</h3>
      <div className="space-container">
      {word.map((char, i) => {
        return (
          char !== ' ' 
          ? <div 
            key={i} 
            className="letter"
            >
            {correctGuesses.includes(char) && char}
          </div>
          : <div key={i} className="space"></div>
        )
          })}
      </div>
    </div>
  )
}

export default Gameboard;