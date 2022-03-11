import { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebaseAuth, firebaseTimestamp, firestore } from '../firebase';
import ChatMessage from './ChatMessage';
import styles from './ChatRoom.module.css';

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = firebaseAuth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebaseTimestamp,
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