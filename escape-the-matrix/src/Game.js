import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Game.css';
import { Container } from '@material-ui/core';
// import { View, Button } from 'react-native';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Game() {

    return (
        <Container fixed maxWidth='md' >

            <div>
                <p>This is the page the game is played on</p>

                <Link to="/Highscores">
                    <Button variant="contained" color="secondary" >Death</Button >

                </Link>
            </div>
        </Container>
    );

}



export default Game;




