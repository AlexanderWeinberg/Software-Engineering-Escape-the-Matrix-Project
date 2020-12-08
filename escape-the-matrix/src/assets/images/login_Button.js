import React from 'react';
import firebase from 'firebase';

function LoginButton({ setUser }) {

    function logIn() {
        //creates new auth provider variable
        var provider = new firebase.auth.GoogleAuthProvider();
        //calls a function to have the signin pop up
        firebase.auth().signInWithPopup(provider).then(function (result) {
            //if the call  was sccessful, console log the user and update the state
            console.log(result.user);
            setUser(result.user);
            //if the called resulted in an error, then log the error message
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <button onClick={() => logIn()}>
            Log In
        </button>);
}

export default LoginButton;