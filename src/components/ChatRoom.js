import { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebaseAuth, firebaseTimestamp, firestore } from '../firebase';
import sendMessageIcon from '../images/sendMessageIcon.png';
import ChatMessage from './ChatMessage';
import styles from './ChatRoom.module.css';

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData(query);
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

  return (
    <>
      <main className={styles.chatRoomMain}>
        {messages && messages.map(msg => <ChatMessage key={Math.random()} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className={styles.chatRoomForm} onSubmit={sendMessage}>
        <input className={styles.chatRoomInput} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write your message..." />

        <button className={styles.chatRoomButton} type="submit" disabled={!formValue}><img className={styles.sendMessageIcon} src={sendMessageIcon} alt=':(' /></button>
      </form>
    </>)
    ;
};

export default ChatRoom;