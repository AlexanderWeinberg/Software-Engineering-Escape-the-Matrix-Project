import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home.js';
import Settings from './Settings.js';
import Game from './Game.js';
import Highscores from './Highscores.js';
import SuddenDeath from './SuddenDeathGame';
import SuddenDeathScores from './SuddenDeathScore'

export default function Routes() {
    return (
        <Router>
            <div>



                {/* For Development Purposes */}
                <p>For Developmental Purposes</p>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Settings">Current Run Settings</Link>
                    </li>
                    <li>
                        <Link to="/Game">Gameplay</Link>
                    </li>
                    <li>
                        <Link to="/Highscores">Highscores</Link>
                    </li>
                    <li>
                        <Link to="/SuddenDeathGame">One Hit Gameplay</Link>
                    </li>
                    <li>
                        <Link to="/SuddenDeathScores">One Hit Highscores</Link>
                    </li>
                </ul>

                {/* Will Comment out later */}




                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Settings">
                        <Settings />
                    </Route>
                    <Route path="/Game">
                        <Game />
                    </Route>
                    <Route path="/Highscores">
                        <Highscores />
                    </Route>
                    <Route path="/SuddenDeathGame">
                        <SuddenDeath />
                    </Route>
                    <Route path="/SuddenDeathScores">
                        <SuddenDeathScores />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

