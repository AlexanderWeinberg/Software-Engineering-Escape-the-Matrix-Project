import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseApp from 'firebase';



function YourRank({ collectionName, user }) {
    const [dataList, setDataList] = useState(/* initial state= */[]);
    const [ranker, setRanker] = useState(0);
    var rank; //users actual rank'

    // var ref = new firebase("https://yourfirebase.firebaseio.com");
    const { currentUser } = firebaseApp.auth();

    useEffect(
        () => {
            const unsubscribe = firebase.firestore().collection(collectionName).orderBy("score", "asc")
                .onSnapshot((querySnapshot) => {
                    var firestoreData = [];
                    var yourRank = []; //tracks users rank info
                    var notYourRank = []; //tracks other users
                    querySnapshot.forEach(function (doc) {

                        firestoreData.push({ name: doc.data().name, score: doc.data().score, id: doc.id });

                        // });

                        for (var x = 0; x < firestoreData.length; x++) {
                            // if (firestoreData[x][doc.id] && user.uid /*if user id within array matches*/) {
                            if (firestoreData[x][doc.id] == currentUser && firestoreData[x][doc.name] == { user }/*if user id within array matches*/) {
                                yourRank.push(firestoreData.pop());
                                break;
                            }
                            notYourRank.push(firestoreData.pop())
                        }
                        setRanker(notYourRank.length + 1)
                        if (yourRank.length == 0) {
                            yourRank.push({ name: doc.data("User Not Logged in").name, score: doc.data(0).score });
                        }
                    });
                    setDataList(yourRank);
                    // setDataList(firestoreData);
                });
            return () => unsubscribe()
        },
        []
    )
    // 
    return (
        <div>
            <ul>
                {dataList.map((data) => {
                    return (<li key={data.id}>{ranker}. {data.name} .......... {data.score}</li>)
                })}
            </ul>
        </div>);


    // 

};

export default YourRank;
