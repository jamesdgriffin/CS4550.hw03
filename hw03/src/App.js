import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getResult, valid} from './game.js';

function App() {
  const [secret, setSecret] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");

  function changeText(ev) {
    setText(ev.target.value);
  }

  function guess() {
    if(text==secret) {
      win();
    }
    else if(valid(text)) {
      let result = getResult(text, secret);
      setGuesses(guesses.concat(text));
      setResults(results.concat(result));
      setText("");
      if(guesses.length >= 7) {
        lose();
      }
    }
  }

  function win() {}

  function lose() {}

  function reset() {
    setGuesses([]);
    setResults([]);
    setText("");
  }

  function enter(ev) {
    if (ev.key == "Enter") {
      guess();
    }
  }

  return (
    <div className="App">
      <h1>Secret: {secret}</h1>
      <input type="text" value={text} onChange={changeText}
                onKeyPress={enter}/>
      <h1>Guesses: {guesses.join(', ')}</h1>
      <h1>Results: {results.join(', ')}</h1>
      <p>
        <button onClick={guess}>Guess</button>
        <button onClick={reset}>Reset</button>

      </p>
    </div>
  );
}

export default App;
