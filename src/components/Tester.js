import React, { useState } from 'react';

const Tester = () => {
  const [word, setWord] = useState(null);

  const handleClick = () => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "bf932fb55cmsh5fdfe8a4b7b70f6p14096djsnbc2ed101a881"
      }
    })
    .then(response => response.json())
    .then(data => setWord(data.word))
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>CLICK ME!</button>
      <h3>{word}</h3>
    </div>
  )
}

export default Tester;