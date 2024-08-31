// @ts-nocheck
import './App.css';
import Card from './components/Card';
import { useContext } from 'react';
import authContext from './context/authContext';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const { currentUser, login } = useContext(authContext);

  const handleLogin = async () => {
    setLoading(true);
    await login();
    setLoading(false);
  };

  console.log(currentUser);
  
  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }


  return (
    <div className="container">
      <Card message="Please login" title="Welcome User" />
      <button
        className={`button is-dark mt-5 ${loading ? 'is-loading' : ''}`}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default App;
