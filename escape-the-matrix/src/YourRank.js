import React, { useState, useEffect } from 'react';
import firebase from 'firebase';



function YourRank({ collectionName }) {
    const [dataList, setDataList] = useState(/* initial state= */[]);

    useEffect(
        () => {
            const unsubscribe = firebase.firestore().collection("users")
        },
        []
    )

    // Query query = user.orderBy("score", Direction.DESCENDING).limit(5);
    return (
        <p># Your rank</p>
    )


};

export default YourRank;
