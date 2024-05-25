import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthContext } from './AuthContext/Auth';
import { Alert } from 'react-bootstrap';
function LoginComponent() {
  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/auth/login', { email, password })
      .then(res => {
        const { token, user } = res.data;
        console.log(user.role)
        login(token, user.username, user.role);
        navigate('/dashboard');
      })
      .catch(err => {
        setErrorMessage("Login Failed: " + err);
      });
  };

  if (localStorage.getItem('token')) {
    return (
      <>
        <Alert variant="danger">
          You are already logged in!
        </Alert>
        <button className='btn btn-danger' onClick={()=>logout()}>Logout</button>
      </>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" value={email} onChange={handleEmailChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" value={password} onChange={handlePasswordChange} className="form-control" />
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <button className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;

