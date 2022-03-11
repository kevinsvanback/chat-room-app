import firebase from 'firebase/compat/app';
import styles from './ChatMessage.module.css';

firebase.initializeApp({
  apiKey: "AIzaSyBi4o5_SIj2hsJc_XDJ_6NqhsAttCoxU9Q",
  authDomain: "chat-app-1bd48.firebaseapp.com",
  projectId: "chat-app-1bd48",
  storageBucket: "chat-app-1bd48.appspot.com",
  messagingSenderId: "391589411439",
  appId: "1:391589411439:web:89dd2a2d3bb1d719efeb9a"
});

const auth = firebase.auth();


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'styles.sent' : 'styles.received';

  return (<>
    <div className={`${styles.message} ${messageClass}`}>
      <img className={styles.profileImg} src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>);
}

export default ChatMessage;