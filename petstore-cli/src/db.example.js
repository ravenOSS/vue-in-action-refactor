
import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance

var firebaseConfig = {
  apiKey: "AIzaSyAWjTqxahIILfxxxxxxxxxxxxx",
  authDomain: "project.firebaseapp.com",
  databaseURL: "https://project.firebaseio.com",
  projectId: "projectName",
  storageBucket: "projectName.appspot.com",
  messagingSenderId: "xxxxx5734926",
  appId: "1:xxxx734926:web:yyyyf41925dc1919edf",
  measurementId: "G-RZNXPxxxx"
};

export const db = firebase
.initializeApp(firebaseConfig)
  .firestore()
