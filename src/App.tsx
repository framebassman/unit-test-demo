import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState('natural');

  function handleClick() {
    return navigate("/form");
  }
  
  function makeRedClickHandle() {
    setButtonColor('green');
  }
  
  function getStatus() {
    return true;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          className="App-button"
          onClick={handleClick}
        >
          Navigate To Form
        </button>
        <button className={buttonColor} onClick={makeRedClickHandle}>Make red</button>
      </header>
    </div>
  );
}

export default App;
