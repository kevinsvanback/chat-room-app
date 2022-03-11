// import 'firebase/compat/analytics';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

firebase.initializeApp({
  apiKey: "AIzaSyBi4o5_SIj2hsJc_XDJ_6NqhsAttCoxU9Q",
  authDomain: "chat-app-1bd48.firebaseapp.com",
  projectId: "chat-app-1bd48",
  storageBucket: "chat-app-1bd48.appspot.com",
  messagingSenderId: "391589411439",
  appId: "1:391589411439:web:89dd2a2d3bb1d719efeb9a"
});

const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>React Chat Room</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Join the chat room by signing in with your Google account!</p>
//     </>
//   );
// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   );
// }


// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt');

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     });

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>);
// }


// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>);
// }


export default App;