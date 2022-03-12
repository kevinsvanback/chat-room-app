import { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebaseAuth, firebaseTimestamp, firestore } from '../firebase';
import sendMessageIcon from '../images/sendMessageIcon.png';
// import styles from './ChatRoom.module.css';
import '../styles/ChatRoom.css';
import ChatMessage from './ChatMessage';

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
      <main className='chatRoomMain'>
        {messages && messages.map(msg => <ChatMessage key={Math.random()} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className='chatRoomForm' onSubmit={sendMessage}>
        <input className='chatRoomInput' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write your message..." />

        <button className='chatRoomButton' type="submit" disabled={!formValue}><img className='sendMessageIcon' src={sendMessageIcon} alt=':(' /></button>
      </form>
    </>)
    ;
};

export default ChatRoom;