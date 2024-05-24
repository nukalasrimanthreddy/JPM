import React, { useContext } from 'react';
import { AuthContext } from './AuthContext/Auth';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;