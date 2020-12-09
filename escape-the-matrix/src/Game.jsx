// import React, { useState } from 'react';

import './Game.css';
import { Container } from '@material-ui/core';
import TextInput from "./TextInput.js";
// import { View, Button } from 'react-native';
import returnuser from "./Home";
import ScoreInput from "./ScoreInput";
import Nero from './Nero Ship.png';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


// function Game() {

//     const [score, setScore] = useState(null);
//     return (
//         <Container fixed maxWidth='md' >

//             <div className="Game-Background">
//                 <div className="Game-Area">
//                     <p>This is the page the regular game is played on</p>
//                     <TextInput promptText="Test Score: " field="score" user={score} />

//                     <ScoreInput collectionName="users" score={score} field="score" user={returnuser().uid} />
//                     <div>{score}</div>
//                     <Link to="/Highscores">
//                         <Button variant="contained" color="secondary" >Death</Button >

//                     </Link>
//                 </div>
//             </div>
//         </Container>
//     );

// }
// export default Game;

import React from 'react'
import './Game.css'
import GameOver from './GameOver.jsx'

class Game extends React.Component {


    constructor(props) {
        super(props)

        this.handleKeyDown = this.handleKeyDown.bind(this)

        this.state = {

            width: 0,
            height: 0,
            blockWidth: 0,
            blockHeight: 0,
            gameLoopTimeout: 50,
            timeoutId: 0,
            startshipSize: 0,
            ship: [],
            apple: {},
            direction: 'right',
            directionChanged: false,
            isGameOver: false,
            shipColor: this.props.shipColor || this.getRandomColor(),
            appleColor: this.props.appleColor || this.getRandomColor(),
            score: 0,
            highScore: Number(localStorage.getItem('shipHighScore')) || 0,
            newHighScore: false,
        }
    }

    componentDidMount() {
        this.initGame()
        window.addEventListener('keydown', this.handleKeyDown)
        this.gameLoop()
    }

    initGame() {
        // Game size initialization
        let percentageWidth = this.props.percentageWidth || 40
        let width =
            document.getElementById('GameBoard').parentElement.offsetWidth *
            (percentageWidth / 100)
        width -= width % 30
        if (width < 30) width = 30
        let height = (width / 3) * 2
        let blockWidth = width / 30
        let blockHeight = height / 20

        // ship initialization
        let startshipSize = this.props.startshipSize || 6
        let ship = []
        let Xpos = width / 2
        let Ypos = height / 2
        let shipHead = { Xpos: width / 2, Ypos: height / 2 }
        ship.push(shipHead)
        for (let i = 1; i < startshipSize; i++) {
            Xpos -= blockWidth
            let shipPart = { Xpos: Xpos, Ypos: Ypos }
            ship.push(shipPart)
        }

        // apple position initialization
        let appleXpos =
            Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
            blockWidth
        let appleYpos =
            Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
            blockHeight
        while (appleYpos === ship[0].Ypos) {
            appleYpos =
                Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
                blockHeight
        }

        this.setState({
            width,
            height,
            blockWidth,
            blockHeight,
            startshipSize,
            ship,
            apple: { Xpos: appleXpos, Ypos: appleYpos },
        })
    }

    gameLoop() {
        let timeoutId = setTimeout(() => {
            if (!this.state.isGameOver) {
                this.moveship()
                this.tryToEatship()
                this.tryToEatApple()
                this.setState({ directionChanged: false })
            }

            this.gameLoop()
        }, this.state.gameLoopTimeout)

        this.setState({ timeoutId })
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeoutId)
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    resetGame() {
        let width = this.state.width
        let height = this.state.height
        let blockWidth = this.state.blockWidth
        let blockHeight = this.state.blockHeight
        let apple = this.state.apple

        // ship reset
        let ship = []
        let Xpos = width / 2
        let Ypos = height / 2
        let shipHead = { Xpos: width / 2, Ypos: height / 2 }
        ship.push(shipHead)
        for (let i = 1; i < this.state.startshipSize; i++) {
            Xpos -= blockWidth
            let shipPart = { Xpos: Xpos, Ypos: Ypos }
            ship.push(shipPart)
        }

        // apple position reset
        apple.Xpos =
            Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
            blockWidth
        apple.Ypos =
            Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
            blockHeight
        while (this.isAppleOnship(apple.Xpos, apple.Ypos)) {
            apple.Xpos =
                Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
                blockWidth
            apple.Ypos =
                Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
                blockHeight
        }

        this.setState({
            ship,
            apple,
            direction: 'right',
            directionChanged: false,
            isGameOver: false,
            gameLoopTimeout: 50,
            shipColor: this.getRandomColor(),
            appleColor: this.getRandomColor(),
            score: 0,
            newHighScore: false,
        })
    }

    getRandomColor() {
        let hexa = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) color += hexa[Math.floor(Math.random() * 16)]
        return color
    }

    moveship() {
        let ship = this.state.ship
        let previousPartX = this.state.ship[0].Xpos
        let previousPartY = this.state.ship[0].Ypos
        let tmpPartX = previousPartX
        let tmpPartY = previousPartY
        this.moveHead()
        for (let i = 1; i < ship.length; i++) {
            tmpPartX = ship[i].Xpos
            tmpPartY = ship[i].Ypos
            ship[i].Xpos = previousPartX
            ship[i].Ypos = previousPartY
            previousPartX = tmpPartX
            previousPartY = tmpPartY
        }
        this.setState({ ship })
    }

    tryToEatApple() {
        let ship = this.state.ship
        let apple = this.state.apple

        // if the ship's head is on an apple
        if (ship[0].Xpos === apple.Xpos && ship[0].Ypos === apple.Ypos) {
            let width = this.state.width
            let height = this.state.height
            let blockWidth = this.state.blockWidth
            let blockHeight = this.state.blockHeight
            let newTail = { Xpos: apple.Xpos, Ypos: apple.Ypos }
            let highScore = this.state.highScore
            let newHighScore = this.state.newHighScore
            let gameLoopTimeout = this.state.gameLoopTimeout

            // increase ship size
            ship.push(newTail)

            // create another apple
            apple.Xpos =
                Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
                blockWidth
            apple.Ypos =
                Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
                blockHeight
            while (this.isAppleOnship(apple.Xpos, apple.Ypos)) {
                apple.Xpos =
                    Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
                    blockWidth
                apple.Ypos =
                    Math.floor(
                        Math.random() * ((height - blockHeight) / blockHeight + 1)
                    ) * blockHeight
            }

            // increment high score if needed
            if (this.state.score === highScore) {
                highScore++
                localStorage.setItem('shipHighScore', highScore)
                newHighScore = true
            }

            // decrease the game loop timeout
            if (gameLoopTimeout > 25) gameLoopTimeout -= 0.5

            this.setState({
                ship,
                apple,
                score: this.state.score + 1,
                highScore,
                newHighScore,
                gameLoopTimeout,
            })
        }
    }

    tryToEatship() {
        let ship = this.state.ship

        for (let i = 1; i < ship.length; i++) {
            if (ship[0].Xpos === ship[i].Xpos && ship[0].Ypos === ship[i].Ypos)
                this.setState({ isGameOver: true })
        }
    }

    isAppleOnship(appleXpos, appleYpos) {
        let ship = this.state.ship
        for (let i = 0; i < ship.length; i++) {
            if (appleXpos === ship[i].Xpos && appleYpos === ship[i].Ypos)
                return true
        }
        return false
    }

    moveHead() {
        switch (this.state.direction) {
            case 'left':
                this.moveHeadLeft()
                break
            case 'up':
                this.moveHeadUp()
                break
            case 'right':
                this.moveHeadRight()
                break
            default:
                this.moveHeadDown()
        }
    }

    moveHeadLeft() {
        let width = this.state.width
        let blockWidth = this.state.blockWidth
        let ship = this.state.ship
        ship[0].Xpos =
            ship[0].Xpos <= 0 ? width - blockWidth : ship[0].Xpos - blockWidth
        this.setState({ ship })
    }

    moveHeadUp() {
        let height = this.state.height
        let blockHeight = this.state.blockHeight
        let ship = this.state.ship
        ship[0].Ypos =
            ship[0].Ypos <= 0 ? height - blockHeight : ship[0].Ypos - blockHeight
        this.setState({ ship })
    }

    moveHeadRight() {
        let width = this.state.width
        let blockWidth = this.state.blockWidth
        let ship = this.state.ship
        ship[0].Xpos =
            ship[0].Xpos >= width - blockWidth ? 0 : ship[0].Xpos + blockWidth
        this.setState({ ship })
    }

    moveHeadDown() {
        let height = this.state.height
        let blockHeight = this.state.blockHeight
        let ship = this.state.ship
        ship[0].Ypos =
            ship[0].Ypos >= height - blockHeight ? 0 : ship[0].Ypos + blockHeight
        this.setState({ ship })
    }

    handleKeyDown(event) {
        // if spacebar is pressed to run a new game
        if (this.state.isGameOver && event.keyCode === 32) {
            this.resetGame()
            return
        }

        if (this.state.directionChanged) return

        switch (event.keyCode) {
            case 37:
            case 65:
                this.goLeft()
                break
            case 38:
            case 87:
                this.goUp()
                break
            case 39:
            case 68:
                this.goRight()
                break
            case 40:
            case 83:
                this.goDown()
                break
            default:
        }
        this.setState({ directionChanged: true })
    }

    goLeft() {
        let newDirection = this.state.direction === 'right' ? 'right' : 'left'
        this.setState({ direction: newDirection })
    }

    goUp() {
        let newDirection = this.state.direction === 'down' ? 'down' : 'up'
        this.setState({ direction: newDirection })
    }

    goRight() {
        let newDirection = this.state.direction === 'left' ? 'left' : 'right'
        this.setState({ direction: newDirection })
    }

    goDown() {
        let newDirection = this.state.direction === 'up' ? 'up' : 'down'
        this.setState({ direction: newDirection })
    }

    render() {
        // Game over
        if (this.state.isGameOver) {

            return (
                <div>
                    <GameOver
                        width={this.state.width}
                        height={this.state.height}
                        highScore={this.state.highScore}
                        newHighScore={this.state.newHighScore}
                        score={this.state.score}
                    />
                    {/* <ScoreInput 
    collectionName={this.state.{"users"}} 
    score={this.state.score} 
    field={this.state{"score"}} 
    user={this.state.returnuser().uid} />  */}
                </div>

            )
        }

        return (
            <div className="Game-Background">
                <div className="Game-Area">
                    <div
                        id='GameBoard'
                        style={{
                            width: this.state.width,
                            height: this.state.height,
                            borderWidth: this.state.width / 50,
                        }}>
                        {this.state.ship.map((shipPart, index) => {
                            return (
                                <div
                                    key={index}
                                    className='Block'
                                    style={{
                                        width: this.state.blockWidth,
                                        height: this.state.blockHeight,
                                        left: shipPart.Xpos,
                                        top: shipPart.Ypos,
                                        background: this.state.shipColor,
                                    }}
                                />
                            )
                        })}
                        <div
                            className='Block'
                            style={{
                                width: this.state.blockWidth,
                                height: this.state.blockHeight,
                                left: this.state.apple.Xpos,
                                top: this.state.apple.Ypos,
                                background: this.state.appleColor,
                            }}
                        />
                        <div id='Score' style={{ fontSize: this.state.width / 20 }}>
                            HIGH-SCORE: {this.state.highScore}&ensp;&ensp;&ensp;&ensp;SCORE:{' '}
                            {this.state.score}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game


