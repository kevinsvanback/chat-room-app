import firebase from 'firebase/compat/app';
import { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import styles from './ChatRoom.module.css';

firebase.initializeApp({
  apiKey: "AIzaSyBi4o5_SIj2hsJc_XDJ_6NqhsAttCoxU9Q",
  authDomain: "chat-app-1bd48.firebaseapp.com",
  projectId: "chat-app-1bd48",
  storageBucket: "chat-app-1bd48.appspot.com",
  messagingSenderId: "391589411439",
  appId: "1:391589411439:web:89dd2a2d3bb1d719efeb9a"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (<>
    <main className={styles.chatRoomMain}>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className={styles.chatRoomForm} onSubmit={sendMessage}>

      <input className={styles.chatRoomInput} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button className={styles.chatRoomButton} type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>);
}

export default ChatRoom;