import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Highscores.css';
import './App.css';
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import UserResponse from "./UserRankings.js";
import YourRank from "./YourRank.js";


function SuddenDeathScores() {
    return (

        <div className="App">
            <header className="App-header">
                <Container fixed maxWidth='md' >
                    <div className="App-menu">




                        {/* is going to show the top five users from the data base */}
                        <p><u>TOP ONE-HIT PLAYER HIGHSCORES:</u>
                            <UserResponse collectionName={"suddenusers"} />
                        </p>

                        {/* Is going to show current users rank within database */}
                        <p><u>Your Rank: </u>
                            <YourRank collectionName={"suddenusers"} />
                        </p>

                        {/* button that jumps back to home page */}
                        <div><Link to="/Home">
                            <Button variant="contained" color="secondary" >Home</Button >
                        </Link>

                            {/* button that jumps back to pre run settings */}
                            <Link to="/Settings">
                                <Button variant="contained" color="secondary" >Settings</Button >
                            </Link>

                            {/* button that retrys the game */}
                            <Link to="/Game">
                                <Button variant="contained" color="secondary" >Retry</Button >

                            </Link>
                        </div>
                    </div>

                </Container>
            </header>
        </div>

    );
}

export default SuddenDeathScores;