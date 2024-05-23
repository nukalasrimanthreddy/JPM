import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardComponent() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch foods from the server when the component mounts
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:5000/food');
      setFoods(response.data);
      console.log(this.foods)
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>All Foods</h3>
        <ul>
          {foods.map(food => (
            <li key={food._id}>
              <strong>Name:</strong> {food.name}, <strong>Calories:</strong> {food.calories}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardComponent;
