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

export default function Routes() {
    return (
        <Router>
            <div>
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
                </ul>

                <hr />

                <Switch>
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
                </Switch>
            </div>
        </Router>
    );
}