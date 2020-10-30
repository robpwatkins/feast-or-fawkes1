import React, { useState, useEffect } from 'react';
import { words } from '../vocab';

const Gameboard = () => {
  const [word, setWord] = useState(null);

  const wordGetter = () => {
    setWord(words.splice(Math.floor(Math.random() * words.length), 1)[0].split(''));
  }

  const handleClick = () => {
    wordGetter();
  }

  console.log(word);
  return (
    <div>
      <button onClick={handleClick}>CLICK ME!</button>
      {}
    </div>
  )
}

export default Gameboard;