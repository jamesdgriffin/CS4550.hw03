import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getResult, valid} from './game.js';

function App() {
  const [secret, setSecret] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

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
      setMessage("");
      if(guesses.length >= 7) {
        lose();
      }
    }
    else {
      setMessage("Invalid Entry. Try again.");
      setText("");
    }
  }

  function win() {
    setMessage("You Win!");
  }

  function lose() {
    setMessage("You Lose! Press Reset button to try again.");
  }

  function reset() {
    setGuesses([]);
    setResults([]);
    setText("");
    setMessage("");
  }

  function enter(ev) {
    if (ev.key == "Enter") {
      guess();
    }
  }

  if((message=="You Win!") ||
  (message=="You Lose! Press Reset button to try again.")) {
    return (
      <div className="App">
        <h1>Secret: {secret}</h1>
        <h1>Bulls and Cows game!</h1>
        <h2>{message}</h2>
        <input type="text" value=""/>
        <p>
          <button>Guess</button>
          <button onClick={reset}>Reset</button>
        </p>
        <p>
          <table>
          <tr>
            <th>Guesses</th>
            <th>Results</th>
          </tr>
          <tr>
            <td>{guesses[0]}</td>
            <td>{results[0]}</td>
          </tr>
          <tr>
            <td>{guesses[1]}</td>
            <td>{results[1]}</td>
          </tr>
          <tr>
            <td>{guesses[2]}</td>
            <td>{results[2]}</td>
          </tr>
          <tr>
            <td>{guesses[3]}</td>
            <td>{results[3]}</td>
          </tr>
          <tr>
            <td>{guesses[4]}</td>
            <td>{results[4]}</td>
          </tr>
          <tr>
            <td>{guesses[5]}</td>
            <td>{results[5]}</td>
          </tr>
          <tr>
            <td>{guesses[6]}</td>
            <td>{results[6]}</td>
          </tr>
          <tr>
            <td>{guesses[7]}</td>
            <td>{results[7]}</td>
          </tr>
        </table>
      </p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Secret: {secret}</h1>
      <h1>Bulls and Cows game!</h1>
      <h2>{message}</h2>
      <input type="text" value={text} onChange={changeText}
      onKeyPress={enter}/>
      <p>
        <button onClick={guess}>Guess</button>
        <button onClick={reset}>Reset</button>
      </p>
      <p>
        <table>
          <tr>
            <th>Guesses</th>
            <th>Results</th>
          </tr>
          <tr>
            <td>{guesses[0]}</td>
            <td>{results[0]}</td>
          </tr>
          <tr>
            <td>{guesses[1]}</td>
            <td>{results[1]}</td>
          </tr>
          <tr>
            <td>{guesses[2]}</td>
            <td>{results[2]}</td>
          </tr>
          <tr>
            <td>{guesses[3]}</td>
            <td>{results[3]}</td>
          </tr>
          <tr>
            <td>{guesses[4]}</td>
            <td>{results[4]}</td>
          </tr>
          <tr>
            <td>{guesses[5]}</td>
            <td>{results[5]}</td>
          </tr>
          <tr>
            <td>{guesses[6]}</td>
            <td>{results[6]}</td>
          </tr>
          <tr>
            <td>{guesses[7]}</td>
            <td>{results[7]}</td>
          </tr>
        </table>
      </p>
    </div>
  );
}

export default App;
