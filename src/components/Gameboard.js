import React, { useState, useEffect } from 'react';
import { words } from '../vocab';

const Gameboard = () => {
  const [word, setWord] = useState([]);

  const wordGetter = () => {
    setWord(words.splice(Math.floor(Math.random() * words.length), 1)[0].split(''));
  }

  const handleClick = () => {
    wordGetter();
  }

  console.log(word);
  return (
    <div className="everything">
      <button onClick={handleClick}>CLICK ME!</button>
      <h3>{word}</h3>
      <div className="space-container">
      {word.map((char, i) => {
        return (
          char === ' ' 
          ? <div key={i} className="space"></div>
          : <div key={i} className="letter"></div>
        )
          })}
      </div>
    </div>
  )
}

export default Gameboard;