import React, { useState } from 'react';
import logo from './logo.svg';
import './Home.css';
import './App.css';
import LoginButton from "./login_Button.js";
import TextInput from "./TextInput.js";
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Nero from './Nero Ship.png';

function Home() {
    const [user, setUser] = useState(null) //setUser is declared


    function returnuser() {
        return user;
    }

    return (
        <div className="App">

            <header className="App-header">
                <div className="App-menu">

                    {/* Login Button and login success message */}
                    <div className="Login-buttton">
                        <LoginButton setUser={(user) => setUser(user)} />
                    </div>

                    <div>

                        {user != null && <p> Welcome to the Matrix, {user.displayName}</p>}
                    </div>


                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <div className="home-title">
                        Escape the Matrix
                        </div>

                    <div className="Ship">
                        <td><img src={Nero} alt="" width="200" height="300" /></td>
                    </div>

                    <div className="Username-Button">
                        <TextInput promptText="Enter UserName: " field="name" user={user} />
                    </div>

                    <div className="Enter-Button">
                        <Link to="/Settings">
                            <Button variant="contained" color="primary" >Enter</Button >
                        </Link>
                    </div>
                </div>
            </header>
        </div>


    );

}



export default Home;
