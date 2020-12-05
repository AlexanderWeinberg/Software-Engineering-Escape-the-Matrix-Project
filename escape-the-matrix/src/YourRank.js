import React, { useState, useEffect } from 'react';
import firebase from 'firebase';



function YourRank({ collectionName }) {
    const [dataList, setDataList] = useState(/* initial state= */[]);
    var ranker = 0;
    var rank = 0; //users actual rank

    useEffect(
        () => {
            const unsubscribe = firebase.firestore().collection(collectionName).orderBy("score", "asc")
                .onSnapshot((querySnapshot) => {
                    var firestoreData = [];
                    var yourRank = []; //tracks users rank info
                    querySnapshot.forEach(function (doc) {

                        firestoreData.push({ name: doc.data().name, score: doc.data().score, id: doc.id });

                        // });


                        // if () {
                        //     return ()
                        rank = firestoreData.indexOf({ name: doc.data("Kipo").name });

                        yourRank.push(rank);
                        // }


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
                    return (<li key={data.id}>{rank}. {data.name} ..........{data.score}</li>)
                })}
            </ul>
        </div>);


    // 

};

export default YourRank;
