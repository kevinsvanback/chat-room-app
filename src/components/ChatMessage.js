import { firebaseAuth } from '../firebase';
import '../styles/ChatMessage.css';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  return (
    <>
      {
        uid === firebaseAuth.currentUser.uid
          ?
          <div className='messageContainer sent'>
            <img className='profileImg' src={photoURL} alt=':)' />
            <div className='messageText'>
              <p>{text}</p>
            </div>
          </div>
          :
          <div className='messageContainer received'>
            <img className='profileImg' src={photoURL} alt=':)' />
            <div className='messageText'>
              <p>{text}</p>
            </div>
          </div>
      }
    </>
  );
};

export default ChatMessage;