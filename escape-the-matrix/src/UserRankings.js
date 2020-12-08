import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Container } from '@material-ui/core';
import './Highscores.css';

function UserResponses({ collectionName }) {
    const [dataList, setDataList] = useState(/* initial state= */[]);
    var ranker = 0;


    useEffect(
        () => {
            const unsubscribe = firebase.firestore().collection(collectionName).orderBy("score", "asc")
                .onSnapshot((querySnapshot) => {
                    var firestoreData = [];
                    var topfive = [] //list that will track top 5
                    querySnapshot.forEach(function (doc) {

                        firestoreData.push({ name: doc.data().name, score: doc.data().score, id: doc.id });

                    });

                    // while loop determines the amount of top players is shown
                    while (ranker < 5) {
                        topfive.push(firestoreData.pop())
                        ranker += 1;
                    };


                    // });
                    setDataList(topfive);
                    // setDataList(firestoreData);
                });
            return () => unsubscribe()
        },
        []
    )
    // 
    for (var count = 1; count < 6; count++) {
        return (
            <div className="rankings" >
                <Container fixed maxWidth='md' >
                    <ul >
                        {dataList.map((data) => {
                            return (<li key={data.id}>{count++}. {data.name} ...............  {data.score}</li>)
                        })}
                    </ul>
                </Container>
            </div>)

    };
}
export default UserResponses;

//////Code if want to see whole list

//     const [dataList, setDataList] = useState(/* initial state= */[]);
//     var ranker = 0;

//     useEffect(
//         () => {
//             const unsubscribe = firebase.firestore().collection("users").orderBy("score", "desc")
//                 .onSnapshot((querySnapshot) => {
//                     var firestoreData = [];
//                     querySnapshot.forEach(function (doc) {

//                         firestoreData.push({ name: doc.data().name, score: doc.data().score, id: doc.id });
//                     });

//                     setDataList(firestoreData);
//                 });
//             return () => unsubscribe()
//         },
//         []
//     )

//     return (
//         <div>
//             <ul>
//                 {dataList.map((data) => {
//                     return (<li key={data.id}>{data.name} ..........{data.score}</li>)
//                 })}
//             </ul>
//         </div>);
// };



// export default UserResponses;
