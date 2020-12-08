import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Game.css';
import { Container } from '@material-ui/core';
import TextInput from "./TextInput.js";
// import { View, Button } from 'react-native';
import returnuser from "./Home";
import ScoreInput from "./ScoreInput";
import Nero from './Nero Ship.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Game() {

    const [score, setScore] = useState(null);
    return (
        <Container fixed maxWidth='md' >

            <div className="Game-Background">
                <div className="Game-Area">
                    <p>This is the page the regular game is played on</p>
                    <TextInput promptText="Test Score: " field="score" user={score} />

                    <ScoreInput collectionName="users" score={score} field="score" user={returnuser().uid} />
                    <div>{score}</div>
                    <Link to="/Highscores">
                        <Button variant="contained" color="secondary" >Death</Button >

                    </Link>
                </div>
            </div>
        </Container>
    );

}

export default Game;




