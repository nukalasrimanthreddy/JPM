import React, { useState } from 'react';

const AdminDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserSelector onSelectUser={handleUserSelect} />
      {selectedUser && <FoodForm user={selectedUser} />}
    </div>
  );
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
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button type="submit">Select User</button>
      </form>
    );
};

const FoodForm = ({ user }) => {
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
  
    const handleFoodNameChange = (event) => {
      setFoodName(event.target.value);
    };
  
    const handleCaloriesChange = (event) => {
      setCalories(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
        
      console.log(`Designated ${foodName} with ${calories} calories to user ${user}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Designate Food for {user}</h2>
        <label>
          Food Name:
          <input type="text" value={foodName} onChange={handleFoodNameChange} />
        </label>
        <label>
          Calories:
          <input type="number" value={calories} onChange={handleCaloriesChange} />
        </label>
        <button type="submit">Designate Food</button>
      </form>
    );
  };
export default AdminDashboard;
