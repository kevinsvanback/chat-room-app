import { firebaseAuth } from '../firebase';
import styles from './ChatMessage.module.css';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  return (
    <>
      {
        uid === firebaseAuth.currentUser.uid
          ?
          <div className={`${styles.message} ${styles.sent}`}>
            <img className={styles.profileImg} src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=':(' />
            <p>{text}</p>
          </div>
          :
          <div className={`${styles.message} ${styles.received}`}>
            <img className={styles.profileImg} src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=':(' />
            <p>{text}</p>
          </div>
      }
    </>
  );
};

export default ChatMessage;