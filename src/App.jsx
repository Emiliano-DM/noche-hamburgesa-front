import Home from './pages/Home';
import Login from './pages/Login';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <Home user={user} />
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
};

export default App;
