import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Settings.css';
import './App.css';
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { ToggleButtonGroup } from '@material-ui/lab';





function Settings() {
    const [difficulty, setDifficulty] = useState(1);
    const [gameType, setGameType] = React.useState(false);
    const [view, setView] = React.useState('list');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };


    // function that reads the difficulty and determines what to do
    function Difficulty() {

        var diff;
        if (difficulty == 1) {
            diff = " Easy"
        } else if (difficulty == 2) {
            diff = "Medium"
        } else {
            diff = "Hard"
        }
        return (
            <div>
                <h5>Current Difficulty is <b>{diff}</b></h5>
            </div>
        );
    }


    function Gametype() {
        if (gameType == false) {
            return (
                <div><p>ONE-HIT MODE: DEACTIVATED</p>
                    <Link to="/Game">
                        <Button variant="contained" color="primary" >START YOUR ESCAPE</Button >
                    </Link>
                </div >);
        } else {
            return (
                <div>
                    <p>ONE-HIT MODE: <b>ACTIVATED</b></p>
                    <Link to="/SuddenDeathGame">
                        <Button variant="contained" color="primary" >START YOUR ESCAPE</Button >
                    </Link>
                </div>
            );
        }
    }


    return (
        <div className="App">
            <header className="App-header">
                <Container fixed maxWidth='md' >
                    <div className="App-menu">


                        <h5><u>Initial Difficulty</u></h5>
                        {/* <Button variant="contained" color="primary" onClick={() => setDifficulty(1)} >Difficulty Set Test</Button > */}


                        <ToggleButtonGroup className="Toggle" value={view} exclusive onChange={handleChange}>

                            {/* Easy check box */}
                            <ToggleButton
                                value="easy" onClick={() => setDifficulty(1)}>
                                <CheckIcon />Easy
                </ToggleButton>

                            {/* medium check box */}
                            <ToggleButton
                                value="medium" onClick={() => setDifficulty(2)}
                            >
                                <CheckIcon />Medium
                </ToggleButton>

                            {/* hard check box */}
                            <ToggleButton onClick={() => setDifficulty(3)}
                                value="hard"
                            >
                                <CheckIcon /> Hard
                </ToggleButton>
                        </ToggleButtonGroup>



                        <div>
                            <Difficulty />
                        </div>

                        <h5><u>Sudden Death Mode</u></h5>

                        <ToggleButton
                            className="Toggle"
                            value="check"
                            oneHit={gameType}
                            onChange={() => {
                                setGameType(!gameType);
                            }}
                        >
                            <CheckIcon />
                        </ToggleButton>


                        <div>
                            <Gametype />
                        </div>





                    </div>
                </Container>
            </header>
        </div>


    );

}




export default Settings;