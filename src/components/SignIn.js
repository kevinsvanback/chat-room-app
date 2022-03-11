import firebase from 'firebase/compat/app';
import styles from './SignIn.module.css';

firebase.initializeApp({
  apiKey: "AIzaSyBi4o5_SIj2hsJc_XDJ_6NqhsAttCoxU9Q",
  authDomain: "chat-app-1bd48.firebaseapp.com",
  projectId: "chat-app-1bd48",
  storageBucket: "chat-app-1bd48.appspot.com",
  messagingSenderId: "391589411439",
  appId: "1:391589411439:web:89dd2a2d3bb1d719efeb9a"
});

const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className={styles.signIn} onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Join the chat room by signing in with your Google account!</p>
    </>
  );
}

export default SignIn;