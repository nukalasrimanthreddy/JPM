import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
const AdminRequestComponent = () => {
  const [requests, setRequests] = useState([]);
  const [invalidSession, setInvalidSession] = useState(false);
  const token = localStorage.getItem('token')

 useEffect(() => {
    if (token) {
        fetchRequests();
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
  const HandleApprove = async (id) =>{
    try {
        await axios.put(`http://localhost:5000/request/admin`,{id},{ headers: { Authorization: `Bearer ${token}` } });
    }
    catch(err){
        console.error('Error approving request:', err);
    }
  }

  return (
    <div>
      <h2>Requests</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.user}</td>
              <td>{request.foodName}</td>
              <td>{request.calories}</td>
              <td>{request.status}</td>
              <td><button className='btn btn-primary' onClick={()=>HandleApprove(request._id)}>Approve</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminRequestComponent;