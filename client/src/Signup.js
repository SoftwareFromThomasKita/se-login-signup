import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [f_name, setFName] = useState('');
  const [l_name, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [msgColor, setMsgColor] = useState('');

  const handleSignUp = (event, f_name, l_name, username, password) => {
    axios.post('http://localhost:9000/createUser', { f_name, l_name, username, password })
      .then((res) => {
        setMessage('User created: ' + res.data.username);
        setMsgColor('#00ff88');
      })
      .catch((err) => {
        setMessage(err.response?.data || 'Error in Signing Up');
        setMsgColor('#ff4466');
      });
  };

  return (
    <>
      <form id="signupForm">
        <div className="container">
          <h1>Sign Up</h1>
          <label htmlFor="firstname">First Name:
            <input type="text" id="firstname" placeholder="First Name"
              value={f_name} onChange={(e) => setFName(e.target.value)} />
          </label>
          <label htmlFor="lastname">Last Name:
            <input type="text" id="lastname" placeholder="Last Name"
              value={l_name} onChange={(e) => setLName(e.target.value)} />
          </label>
          <label htmlFor="username">Username:
            <input type="text" id="username" placeholder="Username"
              value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label htmlFor="password">Password:
            <input type="password" id="password" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="button" onClick={(event) => handleSignUp(event, f_name, l_name, username, password)}>
            Signup
          </button>
          {message && <p style={{ color: msgColor }}>{message}</p>}
        </div>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </>
  );
}

export default Signup;
