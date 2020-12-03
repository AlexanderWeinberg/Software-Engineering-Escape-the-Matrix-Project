import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from "./login_Button.js";
import TextInput from "./TextInput.js";
import UserResponse from "./UserResponses.js";
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function Home() {
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

                <TextInput promptText="Enter UserName: " field="name" user={user} />
                <Link to="/Settings">
                    <Button variant="contained" color="primary" >Enter</Button >
                </Link>
            </header>
        </div>


    );
    <div>
        <ul>
            <li>
                <Link to="/Settings">Enter</Link>
            </li>
        </ul>
    </div>
}



export default Home;
