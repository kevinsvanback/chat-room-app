import { firebaseAuth } from '../firebase';
import '../styles/SignOut.css';

const SignOut = () => {
  return (
    firebaseAuth.currentUser && (
      <button className='signOut' onClick={() => firebaseAuth.signOut()}>Sign Out</button>
    )
  );
};

export default SignOut;