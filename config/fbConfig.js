import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let config = {
  apiKey: "AIzaSyDDdQAZX9m82b8S2LN4IuCowj4iQrYaP7g",
  authDomain: "authentication-ac999.firebaseapp.com",
  databaseURL: "https://authentication-ac999.firebaseio.com",
  projectId: "authentication-ac999",
  storageBucket: "authentication-ac999.appspot.com",
  messagingSenderId: "836963499398",
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase;
