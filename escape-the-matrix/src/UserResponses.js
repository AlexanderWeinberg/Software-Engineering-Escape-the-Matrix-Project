import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

function UserResponses({ collectionName }) {

    const [dataList, setDataList] = useState(/* initial state= */[]);

    useEffect(
        () => {
            const unsubscribe = firebase.firestore().collection("users")
                .onSnapshot((querySnapshot) => {
                    var firestoreData = [];
                    querySnapshot.forEach(function (doc) {
                        firestoreData.push({ name: doc.data().name, score: doc.data().score, rank: doc.data().rank, id: doc.id });
                    });
                    setDataList(firestoreData);
                });
            return () => unsubscribe()
        },
        []
    )

    return (
        <div>
            <ul>
                {dataList.map((data) => {
                    return (<li key={data.id}>{data.rank}. {data.score}.......  {data.name}</li>)
                })}
            </ul>
        </div>);
};

export default UserResponses;