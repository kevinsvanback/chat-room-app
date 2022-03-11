import { firebaseAuth } from '../firebase';
import styles from './SignOut.module.css';

function SignOut() {
  return firebaseAuth.currentUser && (
    <button className={styles.signOut} onClick={() => firebaseAuth.signOut()}>Sign Out</button>
  );
}

export default SignOut;