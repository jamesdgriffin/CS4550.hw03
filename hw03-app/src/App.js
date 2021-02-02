import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [secret, setSecret] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [text, setText] = useState("");

  function guess(ev) {
    let input = ev.target.value[ev.target.value.length - 1];
    setGuesses(guesses.concat(input));
    setText(input);
  }



  return (
    <div className="App">
      <h1>secret: {secret}</h1>
      <input type="text" value={text} onChange={guess} />
      <h1>guesses: {guesses.join('')}</h1>
      <p>
        <button onClick={() => setGuesses([])}>Reset</button>
      </p>
    </div>
  );
}

export default App;
