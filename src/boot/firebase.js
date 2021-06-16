// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

import "firebase/firestore"
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyDnTT72F2x-PHu7GPMh8rIebn5PjmfWuSI",
  authDomain: "twitter-521b2.firebaseapp.com",
  projectId: "twitter-521b2",
  storageBucket: "twitter-521b2.appspot.com",
  messagingSenderId: "184131116893",
  appId: "1:184131116893:web:c423ee5e55a3b978a792b4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db