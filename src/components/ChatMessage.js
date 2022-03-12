import { firebaseAuth } from '../firebase';
// import styles from './ChatMessage.module.css';
import '../styles/ChatMessage.css';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  return (
    <>
      {
        uid === firebaseAuth.currentUser.uid
          ?
          <div className='message sent'>
            <img className='profileImg' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=':(' />
            <p>{text}</p>
          </div>
          :
          <div className='message received'>
            <img className='profileImg' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=':(' />
            <p>{text}</p>
          </div>
      }
    </>
  );
};

export default ChatMessage;