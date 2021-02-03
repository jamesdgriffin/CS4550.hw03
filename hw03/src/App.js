import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {viewGuesses} from './game.js';

function App() {
  const [secret, setSecret] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [text, setText] = useState("");

  function viewLoGuesses() {
    console.log(viewGuesses(guesses));
  }

  function changeText(ev) {
    setText(ev.target.value);
  }

  function guess() {
    setGuesses(guesses.concat(text));
    setText("");
  }

  function reset() {
    setGuesses([]);
    setText("");
  }

  function enter(ev) {
    if (ev.key == "Enter") {
      guess();
    }
  }

  return (
    <div className="App">
      <h1>secret: {secret}</h1>
      <input type="text" value={text} onChange={changeText}
                onKeyPress={enter}/>
      <h1>guesses: {guesses.join('')}</h1>
      <p>
        <button onClick={guess}>Guess</button>
        <button onClick={reset}>Reset</button>

      </p>
    </div>
  );
}

export default App;
