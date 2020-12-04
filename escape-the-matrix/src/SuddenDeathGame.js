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

function SuddenDeath() {
    const [score, setScore] = useState(0);

    return (
        <Container fixed maxWidth='md' >

            <div>
                <p>This is the page the ONE HIT game is played on</p>

                <Link to="/SuddenDeathScores">
                    <Button variant="contained" color="secondary" >Death</Button >

                </Link>
            </div>
        </Container>
    );

}



export default SuddenDeath;




