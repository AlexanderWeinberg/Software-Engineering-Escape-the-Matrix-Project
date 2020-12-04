import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Game.css';
import { Container } from '@material-ui/core';
import TextInput from "./TextInput.js";
// import { View, Button } from 'react-native';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Game() {
    const [score, setScore] = useState(0);

    return (
        <Container fixed maxWidth='md' >

            <div>
                <p>This is the page the regular game is played on</p>
                <TextInput promptText="Test Score: " field="score" score={score} />

                <Link to="/Highscores">
                    <Button variant="contained" color="secondary" >Death</Button >

                </Link>
            </div>
        </Container>
    );

}



export default Game;




