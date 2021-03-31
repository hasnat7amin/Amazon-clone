// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLGRdOybA6XdzmCYFJCbJQc8dOEormkpw",
    authDomain: "clone-84004.firebaseapp.com",
    projectId: "clone-84004",
    storageBucket: "clone-84004.appspot.com",
    messagingSenderId: "103936524721",
    appId: "1:103936524721:web:994e4e2c30dc54428a7d90",
    measurementId: "G-WWFLENLT3T"
  });

  const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
  export {db, auth, provider};