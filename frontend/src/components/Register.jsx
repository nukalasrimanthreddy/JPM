import React, { useState, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap
import { AuthContext } from './AuthContext/Auth';

function RegisterComponent() {
  const { logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success'); // Define state for alert variant

  const handleSubmit = () => {
    axios.post('http://localhost:5000/auth/register', { username, role, email, password})
      .then(res => {
        setAlertVariant('success'); // Set alert variant to success
        setAlertMessage("Registration Successful");
      })
      .catch(err => {
        setAlertVariant('danger'); // Set alert variant to danger
        setAlertMessage("Registration Failed\n" + err);
      });
  }

  if(localStorage.getItem('token')){
    return(
      <>
      <Alert variant='danger'>
        You are already logged in. Please logout to register a new user.
      </Alert>
        <Button variant="danger" onClick={logout}>Logout</Button>
      </>
    )
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      {alertMessage && <Alert variant={alertVariant}>{alertMessage}</Alert>} {/* Display alert message */}
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="role">
          <Form.Label>Role:</Form.Label>
          <Form.Control type="text" placeholder="Enter your role" value={role} onChange={(e) => setRole(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterComponent;

