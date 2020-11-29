import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from "./login_Button.js";

function App() {
  const [user, setUser] = useState(null) //setUser is declared
  return (
    <div className="App">
      <header className="App-header">

        {/* Login Button and login success message */}
        <LoginButton setUser={(user) => setUser(user)} />
        {user != null && <p> Welcome to the Matrix, {user.displayName}</p>}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Escape the Matrix
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
