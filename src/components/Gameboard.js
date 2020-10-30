import React, { useState, useEffect } from 'react';
import { words } from '../vocab';

const Tester = () => {
  const [word, setWord] = useState(null);

  const wordGetter = () => {
    setWord(words.splice(Math.floor(Math.random() * words.length), 1)[0]);
    console.log(words.length);
  }

  const handleClick = () => {
    wordGetter();
  }

  console.log(word);
  return (
    <div>
      <button onClick={handleClick}>CLICK ME!</button>
      <h3>{word}</h3>
    </div>
  )
}

export default Tester;