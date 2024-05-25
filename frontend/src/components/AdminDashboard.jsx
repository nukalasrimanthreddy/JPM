import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const AdminDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const role = localStorage.getItem('role');

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  if (role === 'admin') {
    return (
      <div className="container">
        <h1>Admin Dashboard</h1>
        <UserSelector onSelectUser={handleUserSelect} />
        {selectedUser && <FoodForm user={selectedUser} />}
      </div>
    );
  } else {
    return (
      <div className="container">
        <Alert variant="danger">Access Denied. You are not an Admin</Alert>
      </div>
    );
  }
};

const UserSelector = ({ onSelectUser }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelectUser(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Select User</button>
    </form>
  );
};

const FoodForm = ({ user }) => {
  const [name, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const token = localStorage.getItem('token');

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = user;

    await axios.post(
      "http://localhost:5000/food/admin",
      { username, name, calories },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(`Designated ${name} with ${calories} calories to user ${user}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Designate Food for {user}</h2>
      <div className="mb-3">
        <label htmlFor="foodName" className="form-label">
          Food Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="foodName"
          value={name}
          onChange={handleFoodNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="calories" className="form-label">
          Calories:
        </label>
        <input
          type="number"
          className="form-control"
          id="calories"
          value={calories}
          onChange={handleCaloriesChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Designate Food</button>
    </form>
  );
};

export default AdminDashboard;
