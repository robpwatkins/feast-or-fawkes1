import React, { useState, useEffect } from 'react';
import { words } from '../vocab';

const Tester = () => {
  const [word, setWord] = useState(null);

  const wordGetter = () => {
    let newWord = words.splice(0, 1)
    setWord(newWord)
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