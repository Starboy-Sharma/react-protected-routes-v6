// @ts-nocheck
import Card from '../components/Card';
import { useContext } from 'react';
import authContext from '../context/authContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profile() {
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
        title={`Howdy! ${currentUser?.name}`}
        message={`You are awesome, you can do anything you want. ${currentUser?.email}`}
      />

      <button
        className={`button is-secondary mt-5 ${loading ? 'is-loading' : ''}`}
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}

export default Profile;
