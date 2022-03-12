import { firebaseAuth, firebaseProvider } from '../firebase';
// import styles from './SignIn.module.css';
import '../styles/SignIn.css';

const SignIn = () => {
  const signInWithGoogle = () => {
    firebaseAuth.signInWithPopup(firebaseProvider);
  };

  return (
    <>
      <button className='signIn' onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Join the chat room by signing in with your Google account!</p>
    </>
  );
};

export default SignIn;