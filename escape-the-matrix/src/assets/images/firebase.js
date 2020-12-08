//original
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCuQXDTo04n3KRRtw0bDHYQo-lXuGOYkc0",
    authDomain: "escape-the-matrix.firebaseapp.com",
    databaseURL: "https://escape-the-matrix.firebaseio.com",
    projectId: "escape-the-matrix",
    storageBucket: "escape-the-matrix.appspot.com",
    messagingSenderId: "215637730686",
    appId: "1:215637730686:web:39b635173cf3b32e27ff2f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);



export default firebase;