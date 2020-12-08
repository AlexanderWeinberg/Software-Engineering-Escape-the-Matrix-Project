import React from 'react'
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import returnuser from "./Home";
import ScoreInput from "./ScoreInput";

function GameOver(props) {
    return (
        <div
            id='GameBoard'
            style={{
                width: props.width,
                height: props.height,
                borderWidth: props.width / 50,
            }}>

            <div id='GameOver' style={{ fontSize: props.width / 15 }}>
                <div id='GameOverText'>GAME OVER</div>
                <div>Your score: {props.score}</div>
                <div>
                    {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
                    {props.highScore}
                </div>
                <Link to="/Highscores">
                    <Button variant="contained" color="pimary" >To Global Highscores</Button >
                </Link>

                <div id='PressSpaceText'>Press Space to restart</div>
            </div>
        </div>
    )
}

export default GameOver