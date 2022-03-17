import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { firebaseAuth } from './firebase';
import './styles/App.css';

const App = () => {
  const [user] = useAuthState(firebaseAuth);

  return (
    <div className='wrapper'>
      <div className="App">
        <header>
          <h1>React Chat Room <FontAwesomeIcon className='icon' icon={faCommentDots} /></h1>
          <SignOut />
        </header>

        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    </div>
  );
};

export default App;