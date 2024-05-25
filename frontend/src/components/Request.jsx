import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestComponent = () => {
    const navigate = useNavigate()
  const [requests, setRequests] = useState([]);
  const [invalidSession, setInvalidSession] = useState(false);
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
 useEffect(() => {
    if (token) {
        if(role === 'user'){
        fetchRequests();
        }
        else{
            navigate('/request/admin')
        }
    }
    else{
      setInvalidSession(true);
    }
  }, [requests]);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/request/admin',{ headers: { Authorization: `Bearer ${token}` } });
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  return (
    <div>
      <h2>Requests</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.foodName}</td>
              <td>{request.calories}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestComponent;
