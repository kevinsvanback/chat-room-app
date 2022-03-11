import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { firebaseAuth } from './firebase';

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