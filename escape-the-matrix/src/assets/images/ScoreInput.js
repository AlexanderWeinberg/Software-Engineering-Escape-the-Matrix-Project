import React, { useState } from 'react';
import firebase from 'firebase';

function ScoreInput({ collectionName, score, field, user }) {
    let fieldfire = { field }


    if (user && user.uid) {
        firebase.firestore().collection(collectionName).doc(user.uid)
            // .set({ fieldfire: score, })
            .set({ [fieldfire]: score }, { merge: true })
            .then(() => {
                console.log("Document written!");
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    return null;

}
export default ScoreInput;

