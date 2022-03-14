import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { firebaseAuth } from './firebase';
import './styles/App.css';

const App = () => {
  const [user] = useAuthState(firebaseAuth);

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
};

export default App;