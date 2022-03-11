import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBi4o5_SIj2hsJc_XDJ_6NqhsAttCoxU9Q",
  authDomain: "chat-app-1bd48.firebaseapp.com",
  projectId: "chat-app-1bd48",
  storageBucket: "chat-app-1bd48.appspot.com",
  messagingSenderId: "391589411439",
  appId: "1:391589411439:web:89dd2a2d3bb1d719efeb9a"
});

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp();
