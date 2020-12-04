import React, { useState } from 'react';
import logo from './logo.svg';
import './Home.css';
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
                <div className="App-menu">

                    {/* Login Button and login success message */}
                    <div>
                        <LoginButton setUser={(user) => setUser(user)} />
                        {user != null && <p> Welcome to the Matrix, {user.displayName}</p>}
                    </div>


                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <div className="home-title">
                        Escape the Matrix
                        </div>


                    <td><img src="/Nero Ship.png" alt="" /></td>

                    <TextInput promptText="Enter UserName: " field="name" user={user} />
                    <Link to="/Settings">
                        <Button variant="contained" color="primary" >Enter</Button >
                    </Link>
                </div>
            </header>
        </div>


    );

}



export default Home;
