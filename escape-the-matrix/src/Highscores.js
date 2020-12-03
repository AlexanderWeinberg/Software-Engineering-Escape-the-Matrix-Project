import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Highscores.css';
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import UserResponse from "./UserResponses.js";
import YourRank from "./YourRank.js";


function Highscores() {
    return (
        <Container fixed maxWidth='md' >

            <p>This is the where the highscores will be after the game is done</p>

            {/* is going to show the top five users from the data base */}
            <p>TOP PLAYERS:
        <UserResponse />
            </p>

            {/* Is going to show current users rank within database */}
            <p>Your Rank:
                <YourRank />
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

        </Container>
    );
}

export default Highscores;