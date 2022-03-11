import 'firebase/analytics';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBi4o5_SIj2hsJc_XDJ_6NqhsAttCoxU9Q",
  authDomain: "chat-app-1bd48.firebaseapp.com",
  projectId: "chat-app-1bd48",
  storageBucket: "chat-app-1bd48.appspot.com",
  messagingSenderId: "391589411439",
  appId: "1:391589411439:web:89dd2a2d3bb1d719efeb9a"
});

// const auth = firebase.auth();
// const firestore = firebase.firestore();

const App = () => {
  // const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>

      <section>
        {/* {user ? <ChatRoom /> : <SignIn />} */}
      </section>
    </div>
  );
};

export default App;
