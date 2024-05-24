import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext/Auth';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

function DashboardComponent() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const  token  = localStorage.getItem('token')
  const [invalidSession, setInvalidSession] = useState(false);

  useEffect(() => {
    if (token) {
      fetchFoods();
    } else {
      setInvalidSession(true);
    }
  }, [foods]);

  const fetchFoods = async () => {
      const response = await axios.get('http://localhost:5000/food', { headers: { Authorization: `Bearer ${token}` } });
      setFoods(response.data);
  };

  const handleAddFood = async () => {
    const name = prompt('Enter the name of the food:');
    const calories = prompt('Enter the calories of the food:');
    
    if (name && calories) {
      try {
        const response = await axios.post('http://localhost:5000/food', { name, calories }, { headers: { Authorization: `Bearer ${token}` } });
        alert('Food added successfully!');
      } catch (error) {
        console.error('Error adding food:', error);
        alert('Failed to add food. Please try again.');
      }
    } else {
      alert('Both name and calories are required.');
    }
  };

  const handleDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:5000/food/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      alert('Food deleted successfully!');
    } catch (error) {
      console.error('Error deleting food:', error);
      alert('Failed to delete food. Please try again.');
    }
  };
  // const handleEdit = async (id) => {
  //   try{
  //     await axios.put(`http://localhost:5000/food/${id}`, {{ headers: { Authorization: `Bearer ${token}` } })
  //   }
  // }

  return (
    <div>
      {invalidSession && (
        <>
        <Alert variant="danger">
          Invalid Session. Please login again.
        </Alert>
        <button className='btn btn-primary' onClick={()=>navigate('/login')}>Login</button>
        </>
      )}
      {!invalidSession && (
        <>
          <h1>Hey {localStorage.getItem('user')}</h1>
          <h2>Dashboard</h2>
          <div>
            <h3>All Foods</h3>
            <button className='btn btn-primary' onClick={handleAddFood}>Add Food</button>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Calories</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {foods.map(food => (
                  <tr key={food._id}>
                    <td>{food.name}</td>
                    <td>{food.calories}</td>
                    <td>
                      <button className='btn btn-danger' onClick={() => handleDelete(food._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardComponent;

