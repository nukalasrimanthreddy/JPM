import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function LoginComponent() {
    
const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    axios.post('http://localhost:5000/auth/login', { email, password })
  .then(res =>{
    console.log(res.data)
    navigate('/dashboard')
  })
  .catch(err => alert("Login Failed: " + err));

  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;
