import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [secret, setSecret] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [text, setText] = useState("");

  function changeText(ev) {
    setText(ev.target.value);
  }

  function guess() {
    setGuesses(guesses.concat(text));
  }

  function reset() {
    setGuesses([]);
    setText("");
  }



  return (
    <div className="App">
      <h1>secret: {secret}</h1>
      <input type="text" value={text} onChange={changeText} />
      <h1>guesses: {guesses.join('')}</h1>
      <p>
        <button onClick={guess}>Guess</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}

export default App;
