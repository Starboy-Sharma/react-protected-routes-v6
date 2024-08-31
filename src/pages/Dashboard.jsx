// @ts-nocheck
import Card from '../components/Card';
import { useContext } from 'react';
import authContext from '../context/authContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useContext(authContext);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  return (
    <>
      <Card
        title={`Welcome ${currentUser?.name}`}
        message={`You are logged in as ${currentUser?.email}`}
      />

      <button
        className={`button is-secondary mt-5 ${loading ? 'is-loading' : ''}`}
        onClick={handleLogout}
      >
        Logout
      </button>

      <Link to="/profile">Go to Profile</Link>
    </>
  );
}

export default Dashboard;
