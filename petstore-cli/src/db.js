
import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance

var firebaseConfig = {
  apiKey: "AIzaSyAWjTqxahIILfU3q_kRqNuqfdTIkdRLT4g",
  authDomain: "via-2020-mtnkoder.firebaseapp.com",
  databaseURL: "https://via-2020-mtnkoder.firebaseio.com",
  projectId: "via-2020-mtnkoder",
  storageBucket: "via-2020-mtnkoder.appspot.com",
  messagingSenderId: "436235734926",
  appId: "1:436235734926:web:776e755f41925dc1919edf",
  measurementId: "G-RZNXP70TZQ"
};

export const db = firebase
.initializeApp(firebaseConfig)
  .firestore()
